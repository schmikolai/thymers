<script>
	import Timer from '../components/timer.svelte';

	let { data } = $props();
</script>

<div class="flex p-4">
	{#each data.timers as timer}
		<Timer {...timer} />
	{/each}
</div>
