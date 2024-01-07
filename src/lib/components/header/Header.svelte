<script lang="ts">
	import { page } from '$app/stores';
	import { MenuIcon } from 'svelte-feather-icons';
	import { LanguageDropdown, ThemeButton } from '$components';
	import { infoStore, userOptionsStore } from '$stores';
	import Drawer from '$components/drawer/Drawer.svelte';
	import Nav from './Nav.svelte';

	$: active = $page.route.id;
</script>

<header class="bg-base-100">
	<div class="p-layout flex justify-center">
		<div class="flex w-full max-w-screen-2xl justify-between">
			<!-- Page title -->
			<div class="flex flex-col gap-1">
				<h1
					class="text-center font-handwriting text-2xl font-bold uppercase tracking-wide md:text-4xl"
				>
					{$infoStore.attributes.title}
				</h1>

				<h2 class="text-center font-sans text-lg tracking-wider md:text-xl">
					{$infoStore.attributes.slogan}
				</h2>
			</div>

			<!-- Main navigation and configurations -->
			<div class="hidden items-center gap-20 md:flex">
				<!-- Main navigation -->
				<Nav />

				<!-- Configurations -->
				<div class="flex gap-1">
					<LanguageDropdown />
					<ThemeButton />
				</div>
			</div>

			<div class="flex items-center justify-end md:hidden">
				<button class="btn btn-ghost" on:click={() => userOptionsStore.openDrawer()}>
					<MenuIcon />
				</button>
			</div>
		</div>
	</div>

	<div class="h-0.5 bg-base-200" />
</header>

<Drawer class="md:hidden" />
