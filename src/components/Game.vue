<template>
	<div class="game">
		<GameField :posX="1" :posY="1" />
		<GameField :posX="2" :posY="1" />
		<GameField :posX="3" :posY="1" />
		<GameField :posX="1" :posY="2" />
		<GameField :posX="2" :posY="2" />
		<GameField :posX="3" :posY="2" />
		<GameField :posX="1" :posY="3" />
		<GameField :posX="2" :posY="3" />
		<GameField :posX="3" :posY="3" />
	</div>
</template>

<script>
import GameField from './GameField.vue'

export default {
	components: { GameField },
}
</script>

<style lang="scss" scoped>
.game {
	width: 100%;

	aspect-ratio: 1/1;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);

	border-radius: 8%;
	overflow: hidden;

	position: relative;
}
</style>