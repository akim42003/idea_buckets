<script lang="ts">
	export let data: {
		posts: { title: string; date: string; slug: string }[];
		readingList: { title: string; author: string; readWhen: string; thoughts: string }[];
	};
</script>

<h1 class="home-title">Things I write and read</h1>

<section class="home-columns">
	<div class="home-posts">
		<h2>Blog</h2>
		<ul class="post-list">
			{#each data.posts as post}
				<li>
					<a href={`/posts/${post.slug}`}>{post.title}</a>
					<span class="post-date">{post.date}</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="home-center" aria-hidden="true"></div>

	<aside class="home-reading">
		<h2>Reading List</h2>
		<ul class="reading-list">
			{#each data.readingList.slice(0, 5) as item}
				<li>
					<span class="reading-title">{item.title}</span>
					<span class="reading-author">{item.author}</span>
				</li>
			{/each}
		</ul>
		{#if data.readingList.length > 0}
			<a class="reading-more" href="/reading-list">Show more</a>
		{/if}
	</aside>
</section>
