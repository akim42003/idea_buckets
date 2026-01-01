<script lang="ts">
	export let data: {
		post: { title: string; date: string; component: unknown };
	};
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<article class="post">
	<h1>{data.post.title}</h1>
	<p class="post-meta">{data.post.date}</p>
	<svelte:component this={data.post.component} />
</article>
