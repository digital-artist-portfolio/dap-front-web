import { derived } from 'svelte/store';
import { LL } from '$i18n';

export interface ICategory {
	id: number;
	name: string;
	url: string;
}

const { subscribe } = derived(LL, ($LL) => [
	{ id: 0, url: '/arts', name: $LL.navigation.arts() },
	{ id: 1, url: '/about', name: $LL.navigation.about() }
]);

export const navigationStore = {
	subscribe
};
