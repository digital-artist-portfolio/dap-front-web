export const themes = ['dark', 'light'] as const;

export type TTheme = (typeof themes)[number];

export const fallbackTheme = themes[0];

export function isTheme(theme: string): theme is TTheme {
	return (themes as readonly string[]).includes(theme);
}
