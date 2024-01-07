<script lang="ts">
	import { InstagramSolidIcon, LinkedInSolidIcon } from '$assets';
	import { LL } from '$i18n';
	import { infoStore, localesStore, userOptionsStore } from '$stores';
	import { copy } from 'svelte-copy';
	import { CheckIcon, ClipboardIcon } from 'svelte-feather-icons';
	import toast, { Toaster } from 'svelte-french-toast';
</script>

<Toaster />

<footer class="p-layout grid grid-flow-row place-items-center gap-14 bg-base-300">
	<div class="footer w-full max-w-screen-2xl grid-flow-row justify-between md:grid-flow-col">
		<!-- Logo -->
		<div class="flex flex-row">
			<p class="font-sans text-xl font-medium text-base-content">LOGO</p>
			<p class="font-sans text-lg font-medium text-base-content">Lilia Graziely</p>
		</div>

		<!-- Navigation Links -->
		<div>
			<h2 class="footer-title opacity-80">{$LL.footer.links()}</h2>

			<nav>
				<ul>
					<li><a href="/arts" class="link-hover link">Arts</a></li>
					<li><a href="/about" class="link-hover link">About</a></li>
				</ul>
			</nav>
		</div>

		<!-- Languages -->
		<div>
			<h2 class="footer-title opacity-80">{$LL.footer.languages()}</h2>

			<nav>
				<ul>
					{#each $localesStore as { id, code, name } (id)}
						<li>
							<a
								href={`?locale=${code}`}
								class="link-hover link"
								on:click={() => {
									userOptionsStore.setLocale(code);
								}}>{name}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<!-- Contact -->
		<div>
			<h2 class="footer-title opacity-80">{$LL.footer.contact()}</h2>

			<div class="group flex flex-row items-center gap-1 first-letter:capitalize">
				<a href={`mailto:${$infoStore.attributes.email}`} class="link-hover link"
					>{$infoStore.attributes.email}</a
				>

				<div class="tooltip" data-tip={$LL.footer.copy.tooltip()}>
					<button
						on:svelte-copy={(event) => toast($LL.footer.copy.success(), { icon: CheckIcon })}
						use:copy={$infoStore.attributes.email}
						class="btn btn-ghost btn-xs opacity-100 focus-visible:opacity-100 group-hover:opacity-100 md:opacity-0"
						type="button"><ClipboardIcon size="16" /></button
					>
				</div>
			</div>
		</div>

		<!-- Social Medias -->
		<div>
			<h2 class="footer-title opacity-80">{$LL.footer.follow()}</h2>

			<nav>
				<ul class="flex flex-row gap-4">
					<li>
						<a target="_blank" aria-label="Instagram" href={$infoStore.attributes.instagram}
							><InstagramSolidIcon size="28" /></a
						>
					</li>

					<li>
						<a target="_blank" aria-label="LinkedIn" href={$infoStore.attributes.linkedin}
							><LinkedInSolidIcon size="28" /></a
						>
					</li>
				</ul>
			</nav>
		</div>
	</div>

	<div class="flex justify-center text-sm">
		<span
			>{$LL.footer.dev()}
			<a href={$infoStore.attributes.dev} class="link-hover link">SILVAWesley</a></span
		>
	</div>
</footer>
