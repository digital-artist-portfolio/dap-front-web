<script lang="ts">
	import ImageDialog from '$lib/ImageDialog.svelte';
	import type { PageData } from './$types';
	import ArtCard from '$lib/ArtCard.svelte';

	export let data: PageData;

	console.log(data.art, 'art');
</script>

<div class="grid grid-cols-3 gap-6 p-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
	{#each data.arts.data as { id, attributes: { Alt: alt, Image: { data: { attributes: { url } } } } }}
		<ArtCard {alt} {id} src={url} />
	{/each}
</div>

{#if data.art?.data}
	<ImageDialog data={data.art.data} />
{/if}

<style>
	:global(html, body) {
		height: 100%;
		overflow-y: auto;
	}
</style>
