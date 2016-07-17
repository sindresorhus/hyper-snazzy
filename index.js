'use strict';
const foregroundColor = '#eff0eb';
const backgroundColor = '#282a36';
const black = backgroundColor;
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#f3f99d';
const blue = '#57c7ff';
const magenta = '#ff6ac1';
const cyan = '#9aedfe';
const gray = '#f1f1f0';
const brightBlack = '#686868';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: '#97979b',
		colors: [
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: rgba(255, 106, 193, 0.25);
			}
		`
	});
};
