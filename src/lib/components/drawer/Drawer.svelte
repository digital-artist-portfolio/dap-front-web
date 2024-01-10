<script lang="ts">
	import { page } from '$app/stores';
	import { localesStore, navigationStore } from '$stores';
	import { MenuIcon, XIcon } from 'svelte-feather-icons';
	import { LL } from '$i18n';
	import { themes } from '$themes';
	import ThemeButton from '$components/theme-switch/ThemeButton.svelte';

	$: activeUrl = $page.route.id;

	let isOpen = false;
</script>

<div class="drawer drawer-end">
	<input id="main-drawer" bind:checked={isOpen} type="checkbox" class="drawer-toggle" />

	<div class="drawer-content">
		<label for="main-drawer" class="btn btn-ghost drawer-button"><MenuIcon /></label>
	</div>

	<div class="drawer-side">
		<label for="main-drawer" aria-label="close sidebar" class="drawer-overlay" />

		<div
			class="flex min-h-full w-72 max-w-full flex-col gap-2 bg-base-100 px-4 py-2 text-base-content"
		>
			<div class="flex justify-between">
				<label for="main-drawer" aria-label="close sidebar" class="btn btn-circle btn-ghost"
					><XIcon /></label
				>
				<ThemeButton variant="circle" />
			</div>
			<ul class="menu gap-2 p-1">
				<!-- Navigation menu -->

				<li>
					<h2 class="menu-title capitalize">{$LL.drawer.pages()}</h2>

					<ul>
						{#each $navigationStore as { id, name, url } (id)}
							<li>
								<a
									href={url}
									class:active={activeUrl === url}
									on:click={() => {
										isOpen = false;
									}}>{name}</a
								>
							</li>
						{/each}
					</ul>
				</li>

				<!-- Language menu -->
				<li>
					<h2 class="menu-title capitalize">{$LL.drawer.languages()}</h2>

					<ul>
						{#each $localesStore.locales as { id, code, name } (id)}
							<li>
								<a
									data-sveltekit-reload
									href={`?locale=${code}`}
									class:active={$localesStore.locale === code}>{name}</a
								>
							</li>
						{/each}
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>
