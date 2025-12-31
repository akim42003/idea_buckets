<script lang="ts">
	import Header from "./header.svelte";
	let { children } = $props();
</script>

<svelte:head>
</svelte:head>


<Header/>

{@render children()}

<footer> Footer </footer>
