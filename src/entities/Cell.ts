export class Cell {
	public x: number;
	public y: number;
	public index: number;
	public willChange: boolean;
	public alive: boolean;
	public neighbours: Cell[];

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		this.alive = true;
		this.neighbours = [];
	}

	public step(): void {
		this.calculateCellState();
	}

	public postStep() {
		if (this.willChange) {
			this.alive = !this.alive;
			this.willChange = false;
		}
	}

	private calculateCellState(): void {
		const liveNeighbours = this.neighbours.filter( (c: Cell) => c.alive ).length;

		if (!this.alive) {
			if (liveNeighbours === 3) { this.willChange = true; }
		} else {
			if (liveNeighbours < 2) { this.willChange = true; }
			if (liveNeighbours > 3) { this.willChange = true; }
		}
	}
}
