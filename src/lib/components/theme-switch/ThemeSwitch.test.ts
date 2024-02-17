import { afterEach, describe, expect, it, vi } from 'vitest';

import { cleanup, render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import ThemeSwitch from './ThemeSwitch.svelte';
import { createThemeStore, getThemeStore } from '$stores';
import { getSingletonContext } from '$utils';
import { writable } from 'svelte/store';

describe('Test ThemeSwitch', async () => {
	afterEach(() => {
		cleanup();
	});

	it('should render the checkbox', async () => {
		render(ThemeSwitch);

		const checkBox = screen.getByRole('checkbox');

		expect(checkBox).toBeInTheDocument();
	});

	it('should have the default value set to false', () => {
		render(ThemeSwitch);

		vi.fn(createThemeStore);

		vi.fn(getThemeStore).mockImplementation(() => {
			return getSingletonContext('hello', createThemeStore, { theme: 'dark' });
		});

		const checkBox = screen.getByRole('checkbox');
		expect(checkBox).not.toBeChecked();
	});
});
