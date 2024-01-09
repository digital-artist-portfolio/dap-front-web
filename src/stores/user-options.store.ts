import { persistable } from '../lib/persistable';

export interface IUserOptions {
	isDrawerOpen: boolean;
}

const { subscribe, update } = persistable<IUserOptions>('user_options', {
	isDrawerOpen: false
});

export const userOptionsStore = {
	subscribe,
	openDrawer() {
		update((currentValue) => ({ ...currentValue, isDrawerOpen: true }));
	},
	closeDrawer() {
		update((currentValue) => ({ ...currentValue, isDrawerOpen: false }));
	}
};
