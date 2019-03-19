import { BaseScene } from './BaseScene';
import { gameOfLifeConfig } from '../config/gameConfig';
import { Cell } from '../entities/Cell';

export class GameScene extends BaseScene{
	private stepAccumulator: number;
	private cells: Cell[] = [];
	private stepNumber: number;
	private uiText: Phaser.GameObjects.Text;
	private steppingPaused: boolean = false;

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

		// add ui
		this.uiText = this.add
			.text(10, 10, 'Step number: 0', { fontSize: '12px'})
			.setShadow(1, 1, '#000', 1)
			.setDepth(10);

		// create cells
		for (let y = 0; y < gameHeight; y += cellSize) {
			for (let x = 0; x < gameWidth; x += cellSize) {
				const color = new Phaser.Display.Color(0, Phaser.Math.Between(100, 255), 0, 1).color;

				const cell = new Cell(this, x, y, 'block');
				cell.index = this.cells.length;
				cell.setTint(new Phaser.Display.Color(0, Phaser.Math.Between(155, 255), 0, 1).color);
				this.cells.push(cell);
				this.add.existing(cell);
			}
		}

		this.input.keyboard.on('keyup-SPACE', () => this.steppingPaused = !this.steppingPaused);
	}

	public update(time: number, delta: number): void {
		this.stepAccumulator += delta;
		if (this.stepAccumulator > gameOfLifeConfig.stepFrequency && !this.steppingPaused) {
			this.stepAccumulator = 0;
			this.stepNumber++;
			this.step();
			this.uiText.setText(`Step number: ${this.stepNumber}`);
		}

		if (this.input.activePointer.isDown) {
			const cell = this.worldXyToCell(this.input.activePointer.worldX, this.input.activePointer.worldY);
			if (cell) {
				cell.setAlive(true);
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
			this.calculateCellState(cell);
		});

		const cellsToUpdate = this.cells.filter( (cell: Cell) => cell.willChange);
		cellsToUpdate.forEach( (cell: Cell) => cell.postStep());

		if (cellsToUpdate.length < this.cells.length / 33) {
			this.seedCells();
		}
	}

	private seedCells() {
		this.cells.forEach( (cell: Cell) => {
			if (Phaser.Math.Between(1, 10) === 1) {
				cell.setAlive(true);
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

	private calculateCellState(cell: Cell): void {
		const liveNeighbours = this.getCellNeighbours(cell)
								   .filter( (c: Cell) => c.alive )
								   .length;

		if (!cell.alive) {
			if (liveNeighbours === 3) { cell.willToggle(); }
		} else {
			if (liveNeighbours < 2) { cell.willToggle(); }
			if (liveNeighbours > 3) { cell.willToggle(); }
		}
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
