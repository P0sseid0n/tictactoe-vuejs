<template>
	<button @click="restartGame" id="RestartGame">Restart game</button>
</template>

<script>
export default {
	methods: {
		restartGame() {
			this.$store.dispatch('resetFields')
		},
	},
}
</script>

<style lang="scss" scoped>
button {
	cursor: pointer;
	background: rgb(35, 35, 35);

	text-transform: uppercase;
	font-size: 12px;
	font-weight: 600;
	color: white;
	font-family: 'Montserrat', sans-serif;

	border-radius: 4px;
	border: 0;
	outline: 0;

	padding: 6px 14px;

	max-width: 200px;

	&:hover {
		background: rgba(40, 40, 40);
	}
}

img {
	fill: red;
}
</style>