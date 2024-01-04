<script lang="ts">
	import { Footer, Header } from '$components';
	import './styles.css';

	import type { LayoutData } from './$types';

	import { infoStore, localesStore, userOptionsStore } from '$stores';

	import { LL } from '$i18n/i18n-svelte';

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
