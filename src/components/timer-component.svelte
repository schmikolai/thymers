<script>
	import { _ } from 'svelte-i18n';
	const { value, unit, first = false } = $props();
</script>

{#if first}
	<p class="text-center">
		<span class="text-5xl">{value}</span>
		<span class="text-xl">{$_('time.' + unit + (value !== 1 ? '.plural' : ''))}</span>
	</p>
{:else}
	<span class="text-2xl">{value}</span>
	<span class="font-light text-lg">{$_('time.' + unit + (value !== 1 ? '.plural' : ''))}</span>
    &nbsp;
{/if}
