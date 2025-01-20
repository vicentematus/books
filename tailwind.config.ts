import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				times: ['Times New Roman', ...defaultTheme.fontFamily.serif],
				garamond: ['Garamond', ...defaultTheme.fontFamily.serif]
				// TODO: Check if I should add random fonts on the title.
				// trebuchet: ['Trebuchet MS', ...defaultTheme.fontFamily.sans],
				// brushscript: ['Brush Script MT', ...defaultTheme.fontFamily.serif],
				// lora: ['Lora Variable', ...defaultTheme.fontFamily.serif],
				// inknut: ['Inknut Antiqua', ...defaultTheme.fontFamily.serif],
				// arvo: ['Arvo', ...defaultTheme.fontFamily.serif]
			}
		}
	},

	plugins: [typography]
} satisfies Config;
