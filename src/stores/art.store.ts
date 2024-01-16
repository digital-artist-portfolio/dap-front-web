import type { IArt } from '$models';
import { writable } from 'svelte/store';

export interface IArtStore {
	art?: IArt;
	arts: IArt[];
}

const { subscribe, set } = writable<IArtStore>({ art: undefined, arts: [] });

export const artStore = {
	subscribe,
	set
};
