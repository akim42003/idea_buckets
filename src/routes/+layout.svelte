<script lang="ts">
	import { base } from '$app/paths';
	import Header from './header.svelte';
	import '../style.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href={`${base}/sveltex/mathjax@3.2.2.chtml.min.css`} />
	<link rel="icon" href={`${base}/favicon.svg`} />
</svelte:head>

<Header />

<main>
	{@render children()}
</main>

<footer>
	<p>Inspired by <a href="https://ashtyn.land">Ashtyn Morel-Blake</a>. Written by Alexander Kim</p>
</footer>
