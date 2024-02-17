<script lang="ts">
	import { Footer, Header } from '$components';
	import { getInfoStore, getLocalesStore, getThemeStore } from '$stores';
	import { Toaster } from 'svelte-french-toast';
	import type { LayoutData } from './$types';
	import './styles.css';

	export let data: LayoutData;

	const localesStore = getLocalesStore();
	const infoStore = getInfoStore();
	const themeStore = getThemeStore();

	localesStore.setLocales(data.locales, data.locale);
	$infoStore = data.info.data;
	$themeStore = { theme: data.theme };
</script>

<div class="flex h-full flex-col">
	<Header />

	<main class="flex-1 p-layout">
		<slot />
	</main>

	<Footer />
</div>

<Toaster />
