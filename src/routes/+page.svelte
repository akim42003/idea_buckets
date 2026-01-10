<script lang="ts">
	import { base } from '$app/paths';

	export let data: {
		posts: { title: string; date: string; slug: string }[];
		primers: { title: string; slug: string; description?: string }[];
		readingList: { title: string; author: string; readWhen: string; thoughts: string }[];
	};
</script>

<h1 class="home-title">A collection of things I write and read across various topics</h1>

<section class="home-columns">
	<div class="home-posts">
		<h2>Writing</h2>
		<ul class="post-list">
			{#each data.posts.slice(0, 3) as post}
				<li>
					<a href={base + '/posts/' + post.slug}>{post.title}</a>
					<span class="post-date">{post.date}</span>
				</li>
			{/each}
		</ul>
		{#if data.posts.length > 0}
			<a class="post-more" href={base + '/posts/'}>Show more</a>
		{/if}
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
			<a class="reading-more" href={base + '/reading-list'}>Show more</a>
		{/if}
	</aside>

	<div class="home-center" aria-hidden="true"></div>

	<aside class="home-primers">
		<h2>Primers</h2>
		<ul class="primer-list">
			{#each data.primers.slice(0, 6) as primer}
				<li>
					<a class="primer-title" href={base + '/primers/' + primer.slug}>{primer.title}</a>
				</li>
			{/each}
		</ul>
		{#if data.primers.length > 0}
			<a class="primer-more" href={base + '/primers'}>Show more</a>
		{/if}
	</aside>
</section>
