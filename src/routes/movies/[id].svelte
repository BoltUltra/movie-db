<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=3d16c511eb1d13db73e0aca6a13d3365&language=en-US`
		);
		const movieDetail = await res.json();

		if (res.ok) {
			return {
				props: { movieDetail }
			};
		}
	}
</script>

<script>
	export let movieDetail;
</script>

<div class="movie-details py-5 mx-7 md:mx-20">
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetail.backdrop_path}
			alt={movieDetail.title}
			class="rounded md:w-[80%] md:mx-auto"
		/>
	</div>
	<div class="text-container space-y-3 md:mx-28">
		<h1 class="font-bold pt-3 text-lg md:text-xl">{movieDetail.title}</h1>
		<p class="overview text-justify text-sm md:text-base font-light">{movieDetail.overview}</p>
		<div class="space-y-1 text-sm md:text-base font-extralight">
			<p>
				<span class="font-bold"
					><i class="fa fa-calendar mr-2 " />Release Date:
				</span>{movieDetail.release_date}
			</p>
			<p>
				<span class="font-bold"
					><i class="fas fa-sack-dollar mr-2" />Budget:
				</span>${movieDetail.budget}
			</p>
			<p>
				<span class="font-bold"
					><i class="fa fa-star mr-2" />Rating:
				</span>{movieDetail.vote_average}
			</p>
			<p>
				<span class="font-bold"
					><i class="fa fa-clock mr-2" />Runtime:
				</span>{movieDetail.runtime}mins
			</p>
		</div>
	</div>
</div>
