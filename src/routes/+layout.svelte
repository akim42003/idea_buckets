<script lang="ts">
	import Header from './header.svelte';
	import '../style.css';
	let { children } = $props();
</script>

<svelte:head></svelte:head>

<Header />

<main>
	{@render children()}
</main>

<footer>
	<p>Inspired by <a href="https://ashtyn.land">Ashtyn Morel Blake</a></p>
</footer>
