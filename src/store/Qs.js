import Vue from 'vue'
import { scaffoldStore } from 'undo-redo-vuex'
import { make } from 'vuex-pathify'
var _ = require('lodash')

const initState = () => ({
  QTypes: [
		{
			type: 'cover',
			icon: 'camera',
			color: '#2980B9'
		},
		{
			type: 'filter',
			icon: 'filter_list',
			color: '#00ced1'
		},
		{
			type: 'images',
			icon: 'filter',
			color: '#00ced1'
		},
		{
			type: 'end',
			icon: 'add_shopping_cart',
			color: '#722f37'
    }
  ],
	qList: [],
	questions: {},
	// oList: [],
	// options: []
})

const state = initState()




// Encontramos el siguiente ID disponible
const returnMax = array => Math.max.apply(Math, array)
const empty = items => items.length > 0
const nextID = array => empty(array) ? returnMax(array) + 1 : 0
//const nextQID = () => empty(state.qList) ? returnMax(state.items) : 0
// const nextOID = () => empty(state.items) ? returnMax( state.items.map(q => q.options).flat() ) : 0

// Pregunta base!
const qSchema = () => ({
	title: '',
	oList: []
})
// const opSchema = () => ({
// 	id: nextOID(),
// 	title: ''
// })

// Mutaciones
const mutations = {
	emptyState: state => {
		const s = initState()
		state.questions = [...s.questions]
		state.options = [...s.options]
		state.qList = [...s.qList]
		state.oList = [...s.oList]
  },
  
  // New Question: ✔
	addQuestion: (state, question) => {
		const id = nextID(state.qList)
		Vue.set(state.questions, id, question)
		state.qList.push(id)
  },

  // Remove: ✔
	removeQuestion: (state, id) => {
		Vue.delete(state.questions, id)
		Vue.delete(state.qList, state.qList.find(q => q.id === id))
	},

  // Update: ✔
	updateQuestion: (state, { id, content, parent = false }) => {

		state.questions[id]
		Vue.set(state.questions[id], 'title', content)
		
		if(isParent) {
			console.log('NO PARENT')
			const qIndex = items.findIndex(q => q.id === id )
			Vue.set(items[qIndex], 'title', content)
		} else {
			console.log('YES PARENT', parent)
			const qIndex = items.length > 1 ? items.findIndex(q => q.id === parent ) : 0
			const oIndex = items[qIndex].options > 1 ? items[qIndex].options.findIndex(o => o.id === id) : 0
			
			console.log( 111,  items[qIndex].options[oIndex] )
			Vue.set(items[qIndex].options[oIndex], 'title', content)
		}
	},

	// Update option
	update: ({items}, { id, content }) => {
		//const
	},

	...make.mutations(state),
}



// Acciones
const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion: ({commit}, type) => {
		debugger
		commit('addQuestion', { type, title: '', oList: [] })
	},
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	updateQuestion: ({commit}, payload) => commit( 'updateQuestion', payload ),
	updateOption: ({commit}, { qId, id, content }) => commit('updateOption', { qId, id, content }),
	...make.actions(state),
}

const getters = {
	qSet: state => state.qList.map( id => state.questions[id] ),
	...make.getters(state)
}

export default scaffoldStore({
	state,
	actions,
	mutations,
  getters,
  namespaced: true,
})








// Pregunta final
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