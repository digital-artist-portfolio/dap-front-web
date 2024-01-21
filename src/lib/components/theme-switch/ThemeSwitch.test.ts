import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/svelte';
import { userEvent } from '@testing-library/user-event';
import ThemeSwitch from './ThemeSwitch.svelte';

describe('Test ThemeSwitch', async () => {
	it('should call the api exactly one time', async () => {
		const user = userEvent.setup();
		render(ThemeSwitch);

		const checkBox = await screen.getByRole('checkbox');

		expect(checkBox).toBeInTheDocument();
		expect(checkBox).not.toBeChecked();

		await user.click(checkBox);
		expect(checkBox).toBeChecked();
	});
});
