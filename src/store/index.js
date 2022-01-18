import { createStore } from 'vuex'

const winCases = [
	{
		1: {
			posX: 1,
			posY: 1,
		},
		2: {
			posX: 2,
			posY: 1,
		},
		3: {
			posX: 3,
			posY: 1,
		},
	},
]

export default createStore({
	state: {
		roundValue: 'x',
		fields: [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		],
		gameStopped: false,
	},
	mutations: {
		CHANGE_ROUND_VALUE(state) {
			if (state.roundValue === 'x') state.roundValue = 'o'
			else if (state.roundValue === 'o') state.roundValue = 'x'
		},
		SET_FIELD_VALUE(state, [posY, posX]) {
			state.fields[posY][posX] = state.roundValue
		},
		RESET_FIELDS(state) {
			state.fields = [
				['', '', ''],
				['', '', ''],
				['', '', ''],
			]

			state.gameStopped = false
		},
		FINISHED_GAME(state) {
			if (!state.fields.some(row => row.includes(''))) state.gameStopped = true
		},
	},
	actions: {
		changeRound(context) {
			context.commit('CHANGE_ROUND_VALUE')
		},

		setFieldValue(context, [posY, posX]) {
			context.commit('SET_FIELD_VALUE', [posY - 1, posX - 1])
			context.commit('CHANGE_ROUND_VALUE')

			context.commit('FINISHED_GAME')
		},

		resetFields(context) {
			context.commit('RESET_FIELDS')
		},
	},
	getters: {
		$roundValue(state) {
			return state.roundValue
		},

		$fields(state) {
			return [...state.fields]
		},

		$gameStopped(state) {
			return state.gameStopped
		},
	},
})
