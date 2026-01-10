<script lang="ts">
	import { base } from '$app/paths';

	export let data: {
		primers: { title: string; slug: string; description?: string }[];
	};
</script>

<h1>Primers</h1>

<p>
	Notes about things I'm less familiar with in adjacent domains. Also, some reference notes on
	frequently used topics I like to keep handy.
</p>

<section class="primer-matrix" aria-label="Primer list">
	{#each data.primers as primer}
		<article class="primer-tile">
			<h2>
				<a href={base + '/primers/' + primer.slug}>{primer.title}</a>
			</h2>
			{#if primer.description}
				<p class="post-meta">{primer.description}</p>
			{/if}
		</article>
	{/each}
</section>
