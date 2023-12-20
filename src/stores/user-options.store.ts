import { persistable } from '../lib/persistable';

export type TTheme = 'dark' | 'light';

export interface IUserOptions {
	isDrawerOpen: boolean;
	locale: string;
	theme: TTheme;
}

const { subscribe, update } = persistable<IUserOptions>('user_options', {
	theme: 'dark',
	locale: 'pt-BR',
	isDrawerOpen: false
});

export const userOptionsStore = {
	subscribe,
	setTheme(theme: TTheme) {
		update((currentValue) => ({ ...currentValue, theme }));
	},
	setLocale(locale: string) {
		update((currentValue) => ({ ...currentValue, locale }));
	},
	openDrawer() {
		update((currentValue) => ({ ...currentValue, isDrawerOpen: true }));
	},
	closeDrawer() {
		update((currentValue) => ({ ...currentValue, isDrawerOpen: false }));
	}
};
