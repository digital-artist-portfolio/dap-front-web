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

<dialog
	aria-modal
	bind:this={ref}
	class="modal modal-bottom sm:modal-middle"
	on:close={handleClose}
>
	<div class="modal-box max-w-full p-0 sm:max-w-full sm:rounded-md">
		<img
			alt={$artStore.art?.attributes.alt}
			src={`${PUBLIC_ASSETS_URL}${$artStore.art?.attributes.image.data.attributes.url}`}
			class="object-contain shadow-2xl"
		/>
	</div>

	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
