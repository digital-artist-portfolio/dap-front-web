<script lang="ts">
	import { Footer, Header } from '$components';
	import { infoStore, localesStore, userOptionsStore } from '$stores';
	import { Toaster } from 'svelte-french-toast';
	import type { LayoutData } from './$types';
	import './styles.css';

	export let data: LayoutData;

	localesStore.setLocales(data.locales, data.locale);
	$infoStore = data.info.data;
</script>

<div class="flex h-full flex-col">
	<Header />

	<main class="p-layout flex-1">
		<slot />
	</main>

	<Footer />
</div>

<Toaster />
