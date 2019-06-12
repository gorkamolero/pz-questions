import Vue from 'vue'
import { scaffoldStore } from 'undo-redo-vuex'
import { make } from 'vuex-pathify'

/* const itemsSchema = {
	id,
	type,
	title,
	subtitle,
	extratitle,
	img,
	layout,
	options: []
} */

const qSchema = {
	id: '',
	type: '',
	title: ''
}

const initQs = [
	'Yo estoy en medio',
	'Adiós, soy el Final',
	'Hola, soy el principio!',
	'Yo tambien'
]

const state = {
	items: [...initQs]
}

const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion: ({commit}) => commit('addQuestion', ''),
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	updateQuestion: ({commit}, { index, content }) => commit( 'updateQuestion', { index, content } ),
	...make.actions(state),
}

const mutations = {
	emptyState: state => {
		state.items = [...initQs]
	},
	// Set items and so on	
	addQuestion: (state, question) => state.items.push(question),
	removeQuestion: ({items}, id) => {
		const whichOne = items.findIndex(q => q.id === id)
		items.splice(whichOne, 1)
	},

	updateQuestion: ({items}, { index, content }) => {
		console.log(index, content)
		Vue.set(items, index, content)
	},

	...make.mutations(state),
}

const getters = make.getters(state)

export default scaffoldStore({
	state,
	actions,
	mutations,
  getters,
  namespaced: true,
})


