<script lang="ts">
	import { PUBLIC_ASSETS_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { ArrowLeftIcon, ArrowRightIcon, XIcon } from 'svelte-feather-icons';
	import { focusTrap } from 'svelte-focus-trap';
	import { fade } from 'svelte/transition';
	import type { IArt } from '../models';

	let dialog: HTMLDialogElement;
	let isOpen: boolean = false;

	export let data: IArt;

	onMount(() => {
		if (dialog) {
			dialog.showModal();
		}
	});

	$: previousLink = () => {
		if (data.attributes.next?.data?.id) {
			return `/arts?id=${data.attributes.next.data.id}`;
		}

		return '/';
	};

	$: nextLink = () => {
		if (data.attributes.previous?.data?.id) {
			return `/arts?id=${data.attributes.previous.data.id}`;
		}

		return '/';
	};
</script>

<dialog
	aria-modal={true}
	class="absolute left-0 top-0 z-50 m-0 flex h-full max-h-full w-full max-w-full flex-col overflow-hidden overscroll-contain bg-gray-950/80"
	use:focusTrap
	transition:fade={{ duration: 100 }}
	bind:this={dialog}
	open={isOpen}
>
	<div class="flex justify-end px-8 pt-8">
		<a aria-label="Close modal" href="/arts" class="text-gray-300 hover:text-gray-100"
			><XIcon size="32" /></a
		>
	</div>

	<div class="flex w-full flex-1 content-center justify-center">
		<div class="flex items-center pl-12">
			<a
				aria-label="Previous image"
				aria-disabled="true"
				href={previousLink()}
				class="items-center text-center text-gray-300 hover:text-gray-100"
				><ArrowLeftIcon size="32" /></a
			>
		</div>
		<div class="flex flex-1 items-center justify-center">
			<img
				src={`${PUBLIC_ASSETS_URL}${data.attributes.Image.data.attributes.url}`}
				alt={data.attributes.Alt}
				class="h-3/5 shadow-2xl"
			/>
		</div>
		<div class="flex items-center pr-12">
			<a aria-label="Next image" href={nextLink()} class="text-gray-300 hover:text-gray-100"
				><ArrowRightIcon size="32" /></a
			>
		</div>
	</div>
</dialog>

<style>
	:global(html, body) {
		overflow-y: hidden;
		height: 100vh;
	}
</style>
