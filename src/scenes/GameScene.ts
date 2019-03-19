import { BaseScene } from './BaseScene';
import { gameOfLifeConfig } from '../config/gameConfig';
import { Cell } from '../entities/Cell';

export class GameScene extends BaseScene{
	private stepAccumulator: number;
	private cells: Cell[] = [];
	private stepNumber: number;
	private uiText: Phaser.GameObjects.Text;
	private steppingPaused: boolean = false;

	private cellRowWidth: number;
	private cellColumnHeight: number;

	constructor(key: string, options: any) {
		super('GameScene');
	}

	public preload(): void {
		// empty
	}

	public init(): void {
		// empty
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

				const cell = new Cell(this, x, y, cellSize, cellSize, color, 1);
				cell.index = this.cells.length;
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
	}

	private step(): void {
		this.cells.forEach( (cell: Cell) => {
			this.calculateCellState(cell);
		});

		const cellsToUpdate = this.cells.filter( (cell: Cell) => cell.needsUpdate);
		cellsToUpdate.forEach( (cell: Cell) => cell.postStep());

		if (cellsToUpdate.length < this.cells.length / 33) {
			this.seedCells();
		}
	}

	private seedCells() {
		this.cells.forEach( (cell: Cell) => {
			if (Phaser.Math.Between(1, 10) > 8) {
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
			cellIndex = gameOfLifeConfig.screenWrap ? cellIndex - this.cells.length : null;
		}
		if (cellIndex < 0) {
			cellIndex = gameOfLifeConfig.screenWrap ? cellIndex + this.cells.length : null;
		}

		return cellIndex;
	}
}
