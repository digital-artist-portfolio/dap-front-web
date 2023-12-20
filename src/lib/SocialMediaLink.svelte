<script lang="ts">
	export let ariaLabel: string;
</script>

<a aria-label={ariaLabel} href="/" class="cursor-pointer text-3xl text-gray-300 hover:text-gray-100"
	><slot title="icon" /></a
>
