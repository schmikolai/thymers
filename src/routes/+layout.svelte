<script>
	import '../app.css';
	import '../i18n';
	let { children } = $props();
</script>

{@render children()}

<style>
	:global(html) {
		background-color: theme(colors.slate.200);
	}
</style>