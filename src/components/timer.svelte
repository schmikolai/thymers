<script>
    import { SimpleTimeFormatter } from './time/simple-time-formatter';
	import { BestApproximationTimeFormatter } from './time/best-approximation-time-formatter';
	import TimerComponent from './timer-component.svelte';

	const { time, name } = $props();
	let timeDiff = $state(time - Date.now());

	$effect(() => {
		const interval = setInterval(() => {
			timeDiff = time - Date.now();
		}, 25);

		return () => clearInterval(interval);
	});

    const timeFormatter = BestApproximationTimeFormatter(3, ["Y", "M", "W", "D", "h", "m", "s"]);
    // const timeFormatter = SimpleTimeFormatter;

	const timeResult = $derived(timeFormatter(timeDiff));
</script>

<div class="flex-1 m-2 p-4 text-white rounded-md bg-slate-700 shadow-xl">
	<p class="text-center">
		{#each Object.entries(timeResult.components) as [unit, value], idx}
			<TimerComponent {unit} {value} first={idx === 0} />
		{/each}
	</p>
	<h2 class="text-lg text-center mt-3">{name}</h2>
</div>
