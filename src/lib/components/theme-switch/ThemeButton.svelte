<script lang="ts">
	import { userOptionsStore } from '$stores';
	import { MoonIcon, SunIcon } from 'svelte-feather-icons';
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };

	let checked: boolean = $userOptionsStore.theme === 'dark' ? false : true;
</script>

<div class={twMerge('flex items-center gap-2', className)}>
	<label class="btn btn-ghost swap swap-rotate">
		<input
			type="checkbox"
			{checked}
			on:change={(e) => {
				userOptionsStore.setTheme(e.currentTarget.checked ? 'light' : 'dark');
			}}
		/>

		<MoonIcon size="20" class="swap-on fill-current" />
		<SunIcon size="20" class="swap-off fill-current" />
	</label>
</div>
