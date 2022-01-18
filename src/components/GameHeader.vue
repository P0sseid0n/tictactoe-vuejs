<template>
	<header>
		<h1>Tic-tac-toe</h1>
		<h5>By <a href="http://p0sseid0n.site" target="_blank" rel="noopener noreferrer">P0sseid0n</a></h5>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
	font-family: 'Montserrat', sans-serif;
	color: white;

	h1,
	h5 {
		display: inline;
		margin: 0 4px;
	}

	h5 {
		font-style: italic;

		a {
			color: white;
		}
	}

	p {
		font-size: 14px;
		margin-bottom: 0;
	}
}
</style>