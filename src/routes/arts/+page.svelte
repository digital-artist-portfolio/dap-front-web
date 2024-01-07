<script lang="ts">
	import ImageDialog from '$lib/ImageDialog.svelte';
	import type { PageData } from './$types';
	import ArtCard from '$lib/ArtCard.svelte';

	export let data: PageData;
</script>

<div class="flex w-full justify-center">
	<div
		class="grid w-full max-w-screen-2xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each data.arts.data as { id, attributes: { alt, image: { data: { attributes: { url } } } } }}
			<ArtCard {alt} {id} src={url} />
		{/each}
	</div>

	{#if data.art?.data}
		<ImageDialog data={data.art.data} />
	{/if}
</div>
