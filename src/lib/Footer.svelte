<script lang="ts">
	import SMButton from '$lib/SocialMediaLink.svelte';

	import { InstagramIcon, LinkedinIcon } from 'svelte-feather-icons';
</script>

<footer class="flex bg-gray-950 px-32 py-16">
	<div>
		<p class="font-sans text-xl font-medium text-gray-300">Lilia Graziely</p>
		<p class="font-sans text-lg text-gray-300">Digital Artist</p>
	</div>

	<ul class="flex flex-1 justify-end gap-6">
		<li>
			<SMButton ariaLabel="Instagram"
				><slot title="icon"><InstagramIcon size="28" /></slot></SMButton
			>
		</li>

		<li>
			<SMButton ariaLabel="Instagram"><slot title="icon"><LinkedinIcon size="28" /></slot></SMButton
			>
		</li>
	</ul>
</footer>
