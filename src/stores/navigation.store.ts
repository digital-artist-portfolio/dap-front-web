import { derived } from 'svelte/store';
import { LL } from '$i18n';
import { getSingletonContext } from '$utils';

const NAVIGATION_STORE_KEY = 'navigation_store';

export interface ICategory {
	id: number;
	name: string;
	url: string;
}

const { subscribe } = derived(LL, ($LL) => [
	{ id: 0, url: '/arts', name: $LL.navigation.arts() },
	{ id: 1, url: '/about', name: $LL.navigation.about() }
]);

export const x = { subscribe };

function createNavigationStore() {
	const { subscribe } = derived(LL, ($LL) => [
		{ id: 0, url: '/arts', name: $LL.navigation.arts() },
		{ id: 1, url: '/about', name: $LL.navigation.about() }
	]);

	return {
		subscribe
	};
}

export function getNavigationStore() {
	return getSingletonContext(NAVIGATION_STORE_KEY, createNavigationStore);
}
