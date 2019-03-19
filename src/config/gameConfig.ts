// phaser game config
export const gameConfig: GameConfig = {
	type: Phaser.AUTO,
	parent: 'game-container',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 640,
		height: 360,
	},
	render: {
		pixelArt: true,
		roundPixels: true,
	}
};

export const gameOfLifeConfig = {
	cellSize: 5,
	stepFrequency: 1000 / 15,
	screenWrap: true,
};
