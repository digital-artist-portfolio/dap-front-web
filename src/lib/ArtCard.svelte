<script lang="ts">
	import { PUBLIC_ASSETS_URL } from '$env/static/public';

	export let alt: string;
	export let id: number;
	export let src: string;
</script>

<div class="shadow-md">
	<a href={`/arts?id=${id}`} class="cursor-zoom-in"
		><img
			{alt}
			height="100px"
			src={`${PUBLIC_ASSETS_URL}${src}`}
			class="aspect-square w-full object-cover"
		/></a
	>
</div>
