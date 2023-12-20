<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { userOptionsStore } from '$stores';

	let className: string = '';

	export { className as class };
</script>

<div class={twMerge('drawer drawer-end', className)}>
	<input
		id="my-drawer"
		type="checkbox"
		checked={$userOptionsStore.isDrawerOpen}
		class="drawer-toggle"
	/>

	<div class="drawer-side h-full max-h-full">
		<button
			class="drawer-overlay"
			on:click={() => {
				userOptionsStore.closeDrawer();
			}}
		/>
		<ul class="menu min-h-full w-96 max-w-full bg-base-100 p-4 text-base-content">
			<li>hello</li>
			<li>hey</li>
		</ul>
	</div>
</div>
