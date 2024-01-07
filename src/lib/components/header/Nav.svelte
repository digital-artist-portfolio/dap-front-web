<script lang="ts">
	import { page } from '$app/stores';
	import { navigationStore } from '$stores';
	import { twMerge } from 'tailwind-merge';

	const activeClasses = 'underline font-bold text-';
	$: activeUrl = $page.route.id;
</script>

<nav>
	<ul class="flex gap-6">
		{#each $navigationStore as { id, name, url } (id)}
			<li>
				<a
					href={url}
					class={twMerge(
						'link-hover link text-lg font-medium underline-offset-8',
						activeUrl === url && activeClasses
					)}>{name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
