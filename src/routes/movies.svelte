<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=3d16c511eb1d13db73e0aca6a13d3365&language=en-US&page=1'
		);
		const data = await res.json();

		if (res.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	}
</script>

<script>
	import MovieList from '../lib/movieList.svelte';
	export let popular;
</script>

<div>
	<MovieList {popular} />
</div>
