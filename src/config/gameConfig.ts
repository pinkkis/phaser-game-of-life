// phaser game config
export const gameConfig: GameConfig = {
	type: Phaser.AUTO,
	scale: {
		parent: 'game-container',
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 640,
		height: 360,
	},
	render: {
		pixelArt: true,
		roundPixels: true,
	},
	disableContextMenu: true,
};

export const gameOfLifeConfig = {
	cellSize: 5,
	stepFrequency: 1000 / 20,
	screenWrap: true,
};
