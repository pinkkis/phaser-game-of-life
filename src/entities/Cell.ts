export class Cell extends Phaser.GameObjects.Image {
	public index: number;
	public willChange: boolean;
	public alive: boolean;

	constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
		super(scene, x, y, texture);
		this.setAlive(true);
		this.setOrigin(0);
	}

	public setAlive(alive: boolean) {
		this.alive = alive;
		this.setVisible(alive);
	}

	public willToggle() {
		this.willChange = true;
	}

	public postStep() {
		if (this.willChange) {
			this.setAlive(!this.alive);
			this.willChange = false;
		}
	}
}
