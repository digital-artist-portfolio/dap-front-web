<script lang="ts">
	import { getThemeStore } from '$stores';
	import { MoonIcon, SunIcon } from 'svelte-feather-icons';
	import { twMerge } from 'tailwind-merge';

	export let variant: 'circle' | 'rounded-square' = 'rounded-square';
	const themeStore = getThemeStore();

	function handleChange(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const newTheme = e.currentTarget.checked ? 'light' : 'dark';
		themeStore.setThemeAndUpdate(newTheme);
	}

	$: checked = $themeStore.theme === 'light';

	const circleStyles = 'btn-circle';
</script>

<div class="flex items-center gap-2">
	<label
		class={twMerge(
			'btn btn-ghost swap swap-rotate outline-1 outline-black',
			variant === 'circle' && circleStyles
		)}
	>
		<input {checked} type="checkbox" on:change={handleChange} />

		<MoonIcon size="20" class="swap-on fill-current" />
		<SunIcon size="20" class="swap-off fill-current" />
	</label>
</div>
