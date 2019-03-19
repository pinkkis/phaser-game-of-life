export class Cell extends Phaser.GameObjects.Rectangle {
	public index: number;
	private isAlive: boolean;
	private willChange: boolean;

	constructor(scene: Phaser.Scene, x: number, y: number, w: number, h: number, fillColor: number, alpha: number) {
		super(scene, x, y, w, h, fillColor, alpha);
		this.isAlive = true;
		this.setOrigin(0);
		this.setInteractive();

		this.on('pointerup', (pointer: Phaser.Input.Pointer) => {
			this.alive = !this.isAlive;
		});
	}

	public get alive(): boolean {
		return this.isAlive;
	}

	public set alive(alive: boolean) {
		this.isAlive = alive;
		this.isFilled = alive;
		if (this.alive) {
			this.setFillStyle(new Phaser.Display.Color(0, Phaser.Math.Between(100, 255), 0, 1).color, 1);
		}
	}

	public get needsUpdate(): boolean {
		return this.willChange;
	}

	public willToggle() {
		this.willChange = true;
	}

	public postStep() {
		if (this.willChange) {
			this.alive = !this.alive;
			this.willChange = false;
		}
	}
}
