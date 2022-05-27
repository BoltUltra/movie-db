<script>
	export let movie;
</script>

<div class="movie-card transition ease-in-out hover:scale-110 duration-300">
	<a href={'/movies/' + movie.id} target="">
		<img
			src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
			alt={movie.title}
			class="rounded-lg cursor-pointer"
		/>
	</a>

	<div class="description text-xs">
		<h1 class="font-semibold">{movie.title}</h1>
		<p class="font-light">{movie.release_date}</p>
	</div>
</div>

<style>
</style>
