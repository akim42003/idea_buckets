<script lang="ts">
	export let data: {
		posts: { title: string; date: string; slug: string; description?: string }[];
	};
</script>

<h1>Posts</h1>

<section>
	{#each data.posts as post}
		<article>
			<h2>
				<a href={`/posts/${post.slug}`}>{post.title}</a>
			</h2>
			<p>{post.date}</p>
			{#if post.description}
				<p>{post.description}</p>
			{/if}
		</article>
	{/each}
</section>
