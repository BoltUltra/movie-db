<script>
	export let popular;
	import MovieCard from './movieCard.svelte';
</script>

<h1 class="font-extrabold mb-5">Movie List</h1>
<div class="movielist grid md:grid-cols-5 sm:grid-cols-2 mx-10 gap-y-5 gap-x-4">
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>
