<script lang="ts">
	import { artStore } from '$stores';
	import type { PageData } from './$types';
	import ArtCard from './ArtCard.svelte';
	import ArtDialog from './ArtDialog.svelte';

	export let data: PageData;
	let dialog: HTMLDialogElement;

	$: {
		$artStore = { art: data.art?.data, arts: data.arts.data };

		/* Show modal because an id was specified */
		if (data.art) {
			dialog?.showModal();
		} else {
			dialog?.close();
		}
	}
</script>

<div class="flex w-full justify-center">
	<div
		class="grid w-full max-w-screen-2xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each $artStore.arts as { id, attributes: { alt, image: { data: { attributes: { url } } } } } (id)}
			<ArtCard {alt} {id} src={url} />
		{/each}
	</div>

	<ArtDialog bind:ref={dialog} />
</div>
