import { getContext, hasContext, setContext } from 'svelte';
import { readable, writable } from 'svelte/store';

export function getSingletonContext<T, A>(key: string, fn: (value?: A) => T, defaultValue?: A) {
	if (hasContext(key)) {
		return getContext<T>(key);
	}

	const value = fn(defaultValue);
	setContext(key, value);
	return value;
}

export function getWritable<T>(key: string, value: T) {
	return getSingletonContext(key, writable, value);
}

export function getReadable<T>(key: string, value: T) {
	return getSingletonContext(key, readable, value);
}
