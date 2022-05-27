<script>
	import '../app.css';
	import '../neuphormism.css';
</script>

<svelte:head>
	<title>Movie DB</title>
</svelte:head>
<header>
	<nav class="text-center my-5">
		<i class="fas fa-database mr-2" /><a href="/">Movie Database</a>
	</nav>
</header>
<main>
	<slot />
</main>
<footer class="text-white text-center font-extralight">&copy; 2022</footer>
