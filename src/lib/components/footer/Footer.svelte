<script lang="ts">
	import InstagramSolidIcon from '$assets/instagram-solid-icon.svelte';
	import InstagramSolid from '$assets/instagram-solid-icon.svelte';
	import LinkedinSolidIcon from '$assets/linkedin-solid-icon.svelte';
	import { InstagramIcon, LinkedinIcon } from 'svelte-feather-icons';

	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { LL } from '$i18n/i18n-svelte';

	interface $$Props extends HTMLInputAttributes {}

	export let className: string = '';

	export { className as class };
</script>

<footer
	class={twMerge(
		'footer justify-center bg-base-200 px-16 py-16 text-neutral-content sm:grid-flow-col sm:justify-between sm:text-center',
		className
	)}
	{...$$props}
>
	<!--px-32 py-16-->
	<div class="flex flex-col items-center justify-center text-center sm:items-start">
		<p class="font-sans text-xl font-medium text-base-content">Lilia Graziely</p>
		<p class="font-sans text-lg font-medium text-base-content">Digital Artist</p>
	</div>

	<div class="flex flex-col">
		<div class="flex gap-2">
			<a href="/arts" class="link">Arts</a>

			<circle cx="100" cy="100" r="20" />

			<a href="/about" class="link text-base">About</a>

			|

			<a href="?locale=en" data-sveltekit-reload class="link text-base">English</a>
			<a href="?locale=pt-BR" data-sveltekit-reload class="link text-base">Português (BR)</a>
		</div>
	</div>

	<div class="flex flex-col">
		<h2 class="footer-title text-xl text-base-content opacity-100">{$LL.footer.contact()}</h2>
		<a href="mailto:liliagraziely@gmail.com" class="link text-base">liliagraziely@gmail.com</a>
	</div>

	<nav>
		<h2 class="footer-title text-xl text-base-content opacity-100">FOLLOW</h2>

		<ul class="flex w-full flex-1 justify-center gap-4 text-base-content sm:justify-end">
			<li>
				<a aria-label="Instagram" href="/"><InstagramSolidIcon size="32" /></a>
			</li>

			<li>
				<a aria-label="LinkedIn" href="/"><LinkedinSolidIcon size="32" /></a>
			</li>
		</ul>
	</nav>
</footer>
