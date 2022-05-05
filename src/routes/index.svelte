<script>
	import LeftCol from '../lib/leftCol.svelte';
	import RightCol from '../lib/rightCol.svelte';
</script>

<div class="mx-10 rounded-xl login flex place-self-center mt-24">
	<div class="grid md:grid-cols-2">
		<div>
			<LeftCol />
		</div>
		<div class="md:px-10 px-5 py-5">
			<RightCol />
		</div>
	</div>
</div>
