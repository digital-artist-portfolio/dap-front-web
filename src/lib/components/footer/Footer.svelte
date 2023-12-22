<script lang="ts">
	import SMButton from '$lib/SocialMediaLink.svelte';

	import { InstagramIcon, LinkedinIcon } from 'svelte-feather-icons';

	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends HTMLInputAttributes {}

	export let className: string = '';

	export { className as class };
</script>

<footer
	class={twMerge('footer justify-between bg-base-300 px-32 py-16 text-neutral-content', className)}
	{...$$props}
>
	<div>
		<p class="font-sans text-xl font-medium text-base-content">Lilia Graziely</p>
		<p class="font-sans text-lg text-neutral-content">Digital Artist</p>
	</div>

	<nav>
		<h2 class="footer-title text-xl text-base-content opacity-100">CONTACT ME</h2>

		<ul class="flex flex-1 justify-end gap-6 text-base-content">
			<li>
				<a aria-label="Instagram" href="/"><InstagramIcon size="32" /></a>
			</li>

			<li>
				<a aria-label="LinkedIn" href="/"><LinkedinIcon size="32" /></a>
			</li>
		</ul>
	</nav>
</footer>
