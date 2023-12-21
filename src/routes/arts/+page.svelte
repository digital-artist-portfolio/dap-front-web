<script lang="ts">
	import ImageDialog from '$lib/ImageDialog.svelte';
	import type { PageData } from './$types';
	import ArtCard from '$lib/ArtCard.svelte';

	export let data: PageData;

	console.log(data.art, 'art');
</script>

<div
	class="3xl:grid-cols-5 grid grid-cols-1 gap-6 p-12 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
>
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
