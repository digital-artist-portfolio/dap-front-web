<script lang="ts">
	export let alt: string;
	export let id: number;
	export let src: string;
</script>

<div class="rounded-sm shadow-md">
	<a data-sveltekit-noscroll href={`/arts?id=${id}`} class="cursor-zoom-in"
		><img {alt} src={`${src}`} class="aspect-square object-cover" width="100%" height="100%" /></a
	>
</div>
