<script lang="ts">
	export let active: boolean = false;
	export let href: string;

	$: activeClasses = active ? 'text-gray-100 underline font-bold' : '';
</script>

<li>
	<a
		{href}
		class="text-xl text-gray-300 underline-offset-8 hover:font-medium hover:text-gray-50 {activeClasses}"
		><slot /></a
	>
</li>
