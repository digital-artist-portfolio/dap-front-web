import type { IInfo } from '$models';
import { writable } from 'svelte/store';

const { subscribe, set } = writable<IInfo>();

export const infoStore = {
	subscribe,
	set
};
