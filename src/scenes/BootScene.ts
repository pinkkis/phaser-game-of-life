import { BaseScene } from './BaseScene';

export class BootScene extends BaseScene{
	constructor(key: string, options: any) {
		super('BootScene');
	}

	public preload(): void {
		// empty
	}

	public init(): void {
		// empty
	}

	public create(): void {
		this.scene.start('GameScene', {});
	}

	public update(time: number, delta: number): void {
		// empty
	}
}
