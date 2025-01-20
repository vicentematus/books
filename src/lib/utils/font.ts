// Couldn't find a way to get the keyof type of the fontFamily in tailwind.config.ts
type FontFamily =
	| 'font-times'
	| 'font-garamond'
	| 'font-trebuchet'
	| 'font-lora'
	| 'font-inknut'
	| 'font-arvo';

export function getRandomFontFamily(): FontFamily {
	const fontFamilies: FontFamily[] = [
		'font-times',
		'font-garamond',
		'font-trebuchet',
		'font-lora',
		'font-inknut',
		'font-arvo'
	];
	return fontFamilies[Math.floor(Math.random() * fontFamilies.length)] as FontFamily;
}
