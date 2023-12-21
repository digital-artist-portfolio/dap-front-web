<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="font-sans text-xl text-gray-50" style="color: white">About</h1>
{@html data.text}
