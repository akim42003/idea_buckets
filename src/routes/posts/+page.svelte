<script lang="ts">
	import { base } from '$app/paths';

	export let data: {
		posts: { title: string; date: string; slug: string; description?: string }[];
	};
</script>

<h1>Posts</h1>

<section class="primer-matrix" aria-label="Post list">
	{#each data.posts as post}
		<article class="primer-tile">
			<h2>
				<a href={base + '/posts/' + post.slug}>{post.title}</a>
			</h2>
			<p>{post.date}</p>
			{#if post.description}
				<p>{post.description}</p>
			{/if}
		</article>
	{/each}
</section>
