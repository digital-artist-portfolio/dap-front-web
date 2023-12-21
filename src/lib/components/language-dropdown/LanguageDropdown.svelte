<script lang="ts">
	import { localesStore, userOptionsStore } from '$stores';
	import { GlobeIcon } from 'svelte-feather-icons';
</script>

<div class="dropdown dropdown-end">
	<div role="button" tabindex="0" class="btn btn-ghost"><GlobeIcon /></div>

	<ul class="menu dropdown-content w-52 rounded-box bg-base-200 p-2 shadow">
		{#each $localesStore as { id, code, name } (id)}
			<li>
				<a
					data-sveltekit-reload
					href={`?locale=${code}`}
					class:active={$userOptionsStore.locale === code}
					on:click={() => {
						userOptionsStore.setLocale(code);
					}}>{name}</a
				>
			</li>
		{/each}
	</ul>
</div>
