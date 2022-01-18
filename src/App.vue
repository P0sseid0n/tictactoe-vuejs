<template>
	<main id="GameScreen">
		<GameHeader />
		<Game />
		<RestartButton v-if="this.gameStopped" />
	</main>
</template>

<script>
import Game from './components/Game.vue'
import GameHeader from './components/GameHeader.vue'
import RestartButton from './components/RestartButton.vue'

export default {
	name: 'App',
	components: { GameHeader, Game, RestartButton },
	computed: {
		gameStopped() {
			return this.$store.getters.$gameStopped
		},
	},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

body {
	height: 100vh;
}

#app {
	position: relative;

	width: 100%;
	height: 100%;

	background: rgb(20, 20, 20);

	padding: 0 16px;
	box-sizing: border-box;
}

#GameScreen {
	position: relative;
	left: 50%;
	transform: translateX(-50%);

	width: 100%;
	max-width: 320px;

	height: 100%;

	display: grid;
	row-gap: 24px;

	text-align: center;

	padding: 48px 0;

	box-sizing: border-box;
	#RestartGame {
		justify-self: center;
	}
}
</style>
