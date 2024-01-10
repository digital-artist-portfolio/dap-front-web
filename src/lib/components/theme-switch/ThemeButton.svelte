<script lang="ts">
	import { themeStore } from '$stores';
	import { MoonIcon, SunIcon } from 'svelte-feather-icons';
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };

	function handleChange(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const newTheme = e.currentTarget.checked ? 'light' : 'dark';
		themeStore.setThemeAndUpdate(newTheme);
	}

	$: checked = $themeStore.theme === 'light';
</script>

<div class={twMerge('flex items-center gap-2', className)}>
	<label class={'btn btn-ghost swap swap-rotate outline-1 outline-black'}>
		<input {checked} type="checkbox" on:change={handleChange} />

		<MoonIcon size="20" class="swap-on fill-current" />
		<SunIcon size="20" class="swap-off fill-current" />
	</label>
</div>
