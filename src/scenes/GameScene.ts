import { BaseScene } from './BaseScene';
import { gameOfLifeConfig } from '../config/gameConfig';
import { Cell } from '../entities/Cell';

export class GameScene extends BaseScene{
	private stepAccumulator: number;
	private cells: Cell[] = [];
	private stepNumber: number;
	private uiText: Phaser.GameObjects.Text;
	private steppingPaused: boolean = false;
	private blitter: Phaser.GameObjects.Blitter;

	private renderTexture: Phaser.GameObjects.RenderTexture;

	private cellRowWidth: number;
	private cellColumnHeight: number;

	constructor(key: string, options: any) {
		super('GameScene');
	}

	public preload(): void {
		// empty
	}

	public init(): void {
		const graphics = this.add.graphics();
		graphics
			.setVisible(false)
			.fillStyle(0x00ff00, 1)
			.fillRect(0, 0, gameOfLifeConfig.cellSize, gameOfLifeConfig.cellSize);

		this.renderTexture = this.add.renderTexture(0, 0, gameOfLifeConfig.cellSize, gameOfLifeConfig.cellSize);
		this.renderTexture.draw(graphics).saveTexture('block');

		graphics.destroy();
	}

	public create(): void {
		const gameWidth = this.scale.gameSize.width;
		const gameHeight = this.scale.gameSize.height;
		const cellSize = gameOfLifeConfig.cellSize;

		this.cellColumnHeight = gameHeight / cellSize;
		this.cellRowWidth = gameWidth / cellSize;

		this.stepAccumulator = 0;
		this.stepNumber = 0;

		this.blitter = this.add.blitter(0, 0, 'block');

		// add ui
		this.uiText = this.add
			.text(5, 5, 'Step 0', { font: '10px monospace'})
			.setShadow(1, 1, '#000', 0)
			.setDepth(10);

		// create cells
		for (let y = 0; y < gameHeight; y += cellSize) {
			for (let x = 0; x < gameWidth; x += cellSize) {
				const color = new Phaser.Display.Color(0, Phaser.Math.Between(100, 255), 0, 1).color;

				const cell = new Cell(x, y);
				cell.index = this.cells.length;
				this.cells.push(cell);
			}
		}

		this.cells.forEach( (cell: Cell) => {
			cell.neighbours = this.getCellNeighbours(cell);
		});

		this.input.keyboard.on('keyup-SPACE', () => this.steppingPaused = !this.steppingPaused);

		this.input.on('pointerup', () => {
			if (!this.scale.isFullscreen) {
				this.scale.startFullscreen();
			}
		});

		this.scale.on(Phaser.Scale.Events.ENTER_FULLSCREEN, () => {
			this.scale.lockOrientation('landscape-primary');
		});
	}

	public update(time: number, delta: number): void {
		this.stepAccumulator += delta;
		if (this.stepAccumulator > gameOfLifeConfig.stepFrequency && !this.steppingPaused) {
			this.stepAccumulator = 0;
			this.stepNumber++;
			this.step();
			this.uiText.setText(`Step ${this.stepNumber}`);
		}

		if (this.input.activePointer.isDown) {
			const cell = this.worldXyToCell(this.input.activePointer.worldX, this.input.activePointer.worldY);
			if (cell) {
				cell.alive = true;
			}
		}
	}

	// private methods ----------------------------------------
	private worldXyToCell(x: number, y: number): Cell {
		const gridX = Phaser.Math.Snap.To(x, gameOfLifeConfig.cellSize);
		const gridY = Phaser.Math.Snap.To(y, gameOfLifeConfig.cellSize);
		const idx = (gridY / gameOfLifeConfig.cellSize * this.cellRowWidth) + (gridX / gameOfLifeConfig.cellSize);
		return idx >= 0 && idx < this.cells.length ? this.cells[idx] : null;
	}

	private step(): void {
		this.cells.forEach( (cell: Cell) => {
			cell.step();
		});

		const cellsToUpdate = this.cells.filter( (cell: Cell) => cell.willChange);

		cellsToUpdate.forEach( (cell: Cell) => cell.postStep());

		if (cellsToUpdate.length < this.cells.length / 33) {
			this.seedCells();
		}

		this.blitter.clear();
		this.cells.map( (cell: Cell) => {
			if (cell.alive) {
				this.blitter.create(cell.x, cell.y);
			}
		});
	}

	private seedCells() {
		this.cells.forEach( (cell: Cell) => {
			if (Phaser.Math.Between(1, 10) === 1) {
				cell.alive = true;
			}
		});
	}

	private getCellNeighbours(cell: Cell): Cell[] {
		const results: Cell[] = [];
		let targetIndex = -1;

		// above
		targetIndex = this.wrapCell(cell.index - this.cellRowWidth - 1);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		targetIndex = this.wrapCell(cell.index - this.cellRowWidth);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		targetIndex = this.wrapCell(cell.index - this.cellRowWidth + 1);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		// same row
		targetIndex = this.wrapCell(cell.index - 1);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		targetIndex = this.wrapCell(cell.index + 1);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		// below
		targetIndex = this.wrapCell(cell.index + this.cellRowWidth - 1);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		targetIndex = this.wrapCell(cell.index + this.cellRowWidth);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		targetIndex = this.wrapCell(cell.index + this.cellRowWidth + 1);
		if (targetIndex) { results.push( this.cells[targetIndex] ); }

		return results;
	}

	private wrapCell(cellIndex: number): number {
		if (cellIndex > this.cells.length - 1) {
			return gameOfLifeConfig.screenWrap ? cellIndex - this.cells.length : null;
		}
		if (cellIndex < 0) {
			return gameOfLifeConfig.screenWrap ? cellIndex + this.cells.length : null;
		}

		return cellIndex;
	}
}
