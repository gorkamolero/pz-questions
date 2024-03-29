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
	{
		id: 100,
		type: 'filter',
		title: 'Yo estoy en medio'
	},
	{
		id: 1,
		type: 'end',
		title: 'Adiós, soy el Final'
	},
	{
		id: 0,
		type: 'cover',
		title: 'Hola, soy el principio!'
	},
	{
		id: 101,
		type: 'filter',
		title: 'Yo tambien'
	},
]

// Everything in its right place
const comoDiosManda = array => {
	const cover = array.find(q => q.type === 'cover')
	const end = array.find(q => q.type === 'end')
	const noCoverNoFilter = array.filter(q => !['cover', 'end'].includes(q.type))

	return [cover, ...noCoverNoFilter, end]
}


const state = {
	items: [...initQs]
}

const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion: ({commit}) => commit('addQuestion', ''),
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	updateQuestion: ({commit}, { id, content }) => commit( 'updateQuestion', { id, content } ),
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

	updateQuestion: ({items}, { id, content }) => {
		const index = items.findIndex(q => q.id === id)
		Vue.set(state.items[index], 'title', content)
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


