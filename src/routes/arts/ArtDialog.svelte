<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_ASSETS_URL } from '$env/static/public';
	import { artStore } from '$stores';
	import { twMerge } from 'tailwind-merge';

	export let ref: HTMLDialogElement | undefined;

	function handleClose() {
		ref?.close();
		goto('/arts', { noScroll: true });
	}
</script>

<dialog aria-modal bind:this={ref} class="modal" on:close={handleClose}>
	<div
		class="max-h-3/4 modal-box flex w-full max-w-[calc(75vh)] justify-center rounded-md p-0 sm:w-fit"
		style="max-width: calc(75vh)"
	>
		<img
			alt={$artStore.art?.attributes.alt}
			src={`${PUBLIC_ASSETS_URL}${$artStore.art?.attributes.image.data.attributes.url}`}
			width="100%"
			height="100%"
			class="object-contain"
		/>
	</div>

	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
