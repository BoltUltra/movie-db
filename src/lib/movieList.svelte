<script>
	export let popular;
	import MovieCard from './movieCard.svelte';
</script>

<h1 class="font-extrabold mb-5 pl-10 py-5 text-3xl">Popular Movie List</h1>
<div class="movielist grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mx-10 gap-y-5 gap-x-4">
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>
