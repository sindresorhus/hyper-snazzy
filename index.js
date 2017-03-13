'use strict';
const foregroundColor = '#eff0eb';
const backgroundColor = '#282a36';
const backgroundContrastColor = '#3b3d48';
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#f3f99d';
const blue = '#57c7ff';
const magenta = '#ff6ac1';
const cyan = '#9aedfe';

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor,
	foregroundColor,
	borderColor: '#222430',
	cursorColor: '#97979b',
	colors: {
		black: backgroundColor,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white: '#f1f1f0',
		lightBlack: '#686868',
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: foregroundColor
	},
	css: `
		${config.css}

		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}

		.tab_active:before {
			border-color: rgba(255, 106, 193, 0.25);
		}

		.term_fit:not(.term_term) {
			opacity: 0.6;
		}

		.term_fit.term_active {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
			will-change: opacity;
		}

		.header_header {
			background-color: ${backgroundContrastColor};
		}

		.tab_active {
			background-color: ${backgroundColor};
		}
	`
});
