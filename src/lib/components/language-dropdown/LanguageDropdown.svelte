<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { localesStore, userOptionsStore } from '$stores';
	import { GlobeIcon } from 'svelte-feather-icons';
</script>

<div class="dropdown dropdown-end">
	<div role="button" tabindex="0" class="btn btn-ghost"><GlobeIcon /></div>

	<ul class="menu dropdown-content w-52 rounded-box bg-base-200 p-2 shadow">
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
</div>
