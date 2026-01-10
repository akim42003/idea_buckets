<script lang="ts">
	export let data: {
		primer: { title: string; description?: string; component: unknown };
	};
</script>

<svelte:head>
	<title>{data.primer.title}</title>
</svelte:head>

<article class="post">
	<h1>{data.primer.title}</h1>
	{#if data.primer.description}
		<p class="post-meta">{data.primer.description}</p>
	{/if}
	<svelte:component this={data.primer.component} />
</article>
