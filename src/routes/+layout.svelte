<script lang="ts">
	import Header from '../lib/components/header/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import './styles.css';

	import type { LayoutData } from './$types';

	import { infoStore, localesStore, userOptionsStore } from '$stores';
	import { onMount } from 'svelte';

	export let data: LayoutData;

	$localesStore = data.locales;
	$infoStore = data.info.data;

	onMount(() => {
		if (!$userOptionsStore.locale) {
			for (const locale of data.locales) {
				if (locale.isDefault) {
					userOptionsStore.setLocale(locale.code);
				}
			}
		}
	});
</script>

<div class="flex h-full flex-col" data-theme={$userOptionsStore.theme}>
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
