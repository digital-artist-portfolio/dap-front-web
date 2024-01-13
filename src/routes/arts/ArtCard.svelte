<script lang="ts">
	import { PUBLIC_ASSETS_URL } from '$env/static/public';

	export let alt: string;
	export let id: number;
	export let src: string;
</script>

<div class="overflow-hidden rounded-sm shadow-md">
	<a data-sveltekit-noscroll href={`/arts?id=${id}`} class="cursor-zoom-in"
		><img {alt} src={`${PUBLIC_ASSETS_URL}${src}`} class="aspect-square object-cover" /></a
	>
</div>
