<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { themesStore, userOptionsStore } from '$stores';
	import { MoonIcon, SunIcon } from 'svelte-feather-icons';
	import type { ChangeEventHandler } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };

	function handleChange(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const newTheme = e.currentTarget.checked ? 'light' : 'dark';
		themesStore.setTheme(newTheme);
	}

	function isChecked() {
		if (browser) {
			return document.documentElement.getAttribute('data-theme') === 'light' ? true : false;
		}

		return false;
	}

	console.log($themesStore.theme, 'theme');

	$: checked = $themesStore.theme === 'light';
</script>

<div class={twMerge('flex items-center gap-2', className)}>
	<label class={'btn btn-ghost swap swap-rotate outline-1 outline-black'}>
		<input {checked} type="checkbox" on:change={handleChange} />

		<MoonIcon size="20" class="swap-on fill-current" />
		<SunIcon size="20" class="swap-off fill-current" />
	</label>
</div>
