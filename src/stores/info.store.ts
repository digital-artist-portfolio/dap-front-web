import type { IInfo } from '$models';
import { getSingletonContext } from '$utils';
import { writable } from 'svelte/store';

const INFO_STORE_KEY = 'info_store';

export interface IInfoStore extends IInfo {}

function createInfoStore(value?: IInfoStore) {
	const { set, subscribe } = writable<IInfoStore>(value);

	return {
		subscribe,
		set
	};
}

export function getInfoStore() {
	return getSingletonContext(INFO_STORE_KEY, createInfoStore);
}
