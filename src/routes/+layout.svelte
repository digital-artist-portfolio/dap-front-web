<script lang="ts">
	import { Footer, Header } from '$components';
	import { infoStore, localesStore, userOptionsStore } from '$stores';
	import { Toaster } from 'svelte-french-toast';
	import type { LayoutData } from './$types';
	import './styles.css';

	export let data: LayoutData;

	$localesStore = data.locales;
	$infoStore = data.info.data;
</script>

<div class="flex h-full flex-col" data-theme={$userOptionsStore.theme}>
	<Header />

	<main class="flex-1">
		<slot />
	</main>

	<Footer />
</div>

<Toaster />
