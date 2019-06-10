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

const initQuestions = [
  'Hola, soy el principio!',
  'Adiós, soy el Final'
]

const initState = {
	items: initQuestions
}

const state = initState

const actions = {
	...make.actions(state),
	updateQuestion: ({commit}, payload) => {
		console.log('YO ACTION', payload)
		commit( 'updateQuestion', payload )
	},
}

const mutations = {
	// Set items and so on
	...make.mutations(state),
	
	updateQuestion: (state, { index, content }) => {
		var Qs = state.items
		Qs[index] = content
		
		state.items.splice(index, 1, Qs[index])
		console.log(Qs)
	},
	
	emptyState: (state) => {
		state.items = initQuestions
	},	
}

const getters = make.getters(state)

export default scaffoldStore({
  namespaced: true,
	state,
	actions,
	mutations,
  getters
})


