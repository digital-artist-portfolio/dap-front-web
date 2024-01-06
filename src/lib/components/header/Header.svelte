<script lang="ts">
	import { page } from '$app/stores';
	import { MenuIcon } from 'svelte-feather-icons';
	import NavCategory from '../../NavCategory.svelte';
	import { LanguageDropdown, ThemeButton } from '$components';
	import { infoStore, userOptionsStore } from '$stores';
	import Drawer from '$components/drawer/Drawer.svelte';

	$: active = $page.route.id;
</script>

<header class="flex flex-col items-center bg-base-100">
	<div class="p-layout flex w-full max-w-screen-2xl">
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
		<div class="hidden flex-1 items-center justify-end gap-1 md:flex">
			<nav class="mr-32 flex flex-1 justify-end">
				<ul class="flex gap-6">
					<NavCategory active={active === '/arts'} href="/arts">Arts</NavCategory>
					<NavCategory active={active === '/about'} href="/about">About</NavCategory>
				</ul>
			</nav>

			<LanguageDropdown />
			<ThemeButton />
		</div>

		<div class="flex flex-1 items-center justify-end md:hidden">
			<button class="btn btn-ghost" on:click={() => userOptionsStore.openDrawer()}>
				<MenuIcon />
			</button>
		</div>
	</div>

	<div class="h-0.5 w-full bg-base-200" />
</header>

<Drawer class="md:hidden" />
