<template>
	<button :class="['gameField', ...borderStyle]" @click="setValue">
		<transition
			enter-active-class="animate__animated animate__zoomIn animate__faster"
			leave-active-class="animate__animated animate__zoomOut animate__faster"
			appear
		>
			<!-- <span v-show="valueImg" v-html="valueImg"></span> -->
			<span v-show="clicked" v-html="valueImg"> </span>
		</transition>
	</button>
</template>

<script>
import 'animate.css'

export default {
	props: {
		posX: { type: Number, required: true },
		posY: { type: Number, required: true },
	},
	data() {
		return {
			clicked: false,
		}
	},
	computed: {
		valueImg(element) {
			let imgFile

			if (this.fieldValue == 'o') imgFile = require('../assets/o.svg')
			else if (this.fieldValue == 'x') imgFile = require('../assets/x.svg')
			else return element.valueImg

			return `<img style="width: 40%" class="fieldImg" src="${imgFile}" alt="" />`
		},
		borderStyle() {
			return [this.posY == 2 && 'y-middle', this.posX == 2 && 'x-middle']
		},
		roundValue() {
			return this.$store.getters.$roundValue
		},
		fieldValue() {
			const fieldValue = this.$store.getters.$fields[this.posY - 1][this.posX - 1]
			if (this.clicked && fieldValue == '') this.clicked = false

			return fieldValue
		},
		gameStopped() {
			return this.$store.getters.$gameStopped
		},
	},
	methods: {
		setValue() {
			if (this.fieldValue || this.gameStopped) return

			this.clicked = true

			this.$store.dispatch('setFieldValue', [this.posY, this.posX])
		},
	},
}
</script>

<style lang="scss" scoped>
.gameField {
	cursor: pointer;
	background: rgba(35, 35, 35);

	transition: background 0.3s;

	outline: 0;
	border: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		background: rgba(40, 40, 40);
	}

	&.y-middle {
		border-bottom: 2px solid rgb(55, 55, 55);
		border-top: 2px solid rgb(55, 55, 55);
	}

	&.x-middle {
		border-left: 2px solid rgb(55, 55, 55);
		border-right: 2px solid rgb(55, 55, 55);
	}
}
</style>