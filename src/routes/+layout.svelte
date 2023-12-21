<script lang="ts">
	import Header from '../lib/components/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import './styles.css';

	import type { LayoutData } from './$types';

	import { infoStore, localesStore, userOptionsStore } from '$stores';

	export let data: LayoutData;

	$localesStore = data.locales;
	$infoStore = data.info.data;
</script>

<div class="flex h-full flex-col" data-theme={$userOptionsStore.theme}>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
