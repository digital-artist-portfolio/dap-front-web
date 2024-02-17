import type { IArt } from '$models';
import { getSingletonContext } from '$utils';
import { writable } from 'svelte/store';

const ART_STORE_KEY = 'art_store';

export interface IArtStore {
	art?: IArt;
	arts: IArt[];
}

function createArtStore(value?: IArtStore) {
	const { set, update, subscribe } = writable<IArtStore>(value);

	return {
		subscribe,
		update,
		set
	};
}

export function getArtStore() {
	return getSingletonContext(ART_STORE_KEY, createArtStore, { art: undefined, arts: [] });
}
