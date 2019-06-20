import Vue from 'vue'
import { scaffoldStore } from 'undo-redo-vuex'
import { make } from 'vuex-pathify'
import { deleteProp } from '@/utils/methods'
import { resolve } from 'any-promise';

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
	oList: [],
	options: {},
})
window.initState = initState()

const state = initState()

window.state = state




// Encontramos el siguiente ID disponible
const returnMax = array => Math.max.apply(Math, array)
const empty = items => items.length > 0
const nextID = array => empty(array) ? returnMax(array) + 1 : 0
const nextGlobalID = () => nextID(state.qList.concat(state.oList))

// Pregunta base!
const qSchema = () => ({
	title: '',
	oList: []
})
const oSchema = () => ({
	title: ''
})

// Mutaciones
const mutations = {
	emptyState: state => {
		const s = initState()
		// const s = Object.assign({}, initState)

		state.questions = { ...s.questions }
		Object.keys(state.questions).forEach(key => {
			state.questions[key].oList = []
		})
		//Vue.set(state, 'questions', { ...s.questions })
		state.oList = [...s.oList]
		state.options = {}
		state.qList = [...s.qList]
  },
  
  // New Question: ✔	
	addQuestion: (state, { type, qID }) => {
		console.log('Adding question of type ', type)
		// Build question object
		const q = {
			...qSchema(),
			type,
			oList: []
		}

		// Set question at state position
		Vue.set(state.questions, qID, q)
		// Push question into global array
		state.qList.push(qID)
	},

	// Add option
	addOption: (state, { qID, oID }) => {
		// Build option object
		const o = { ...oSchema() }
		// Set option in options object
		Vue.set(state.options, oID, o)
		// Push ID into question list
		state.questions[qID].oList.push(oID)
		state.oList.push(oID)
	},
/* 
	addQuestionAndOption: (state, {type}) => {
		console.log('Adding question of type ', type)
		// Get next ID
		const qID = nextGlobalID()
		// Build question object
		const q = {
			...qSchema(),
			type,
			oList: []
		}

		// Set question at state position
		Vue.set(state.questions, qID, q)
		// Push question into global array
		state.qList.push(qID)

		// THEN
		// Get next ID
		const oID = nextGlobalID()
		// Build option object
		const o = { ...oSchema() }
		// Push ID into question list
		state.questions[qID].oList.push(oID)
		state.oList.push(oID)
		// Set option inside
		Vue.set(state.options, oID, o)
		debugger
	}, */

  // Remove: ✔
	removeQuestion: ({questions, qList}, id) => {
		Vue.delete(questions, id)
		Vue.delete(qList, qList.findIndex(q => q === id))
	},
	
	removeOption: (state, { oID, qID }) => {
		console.log(oID, qID)
		//const o = state.options[oID]
		Vue.delete(state.questions[qID].oList, state.questions[qID].oList.findIndex(o => o === oID))
		Vue.delete(state.options, oID)
		state.oList.splice( state.oList.indexOf(oID) )
		//Vue.delete(state.oList, state.oList.findIndex(o => o === oID))
	},

	// Update: ✔
	update: (state, { id, field, type, content }) => {
		Vue.set(state[type][id], field, content)
	},
	...make.mutations(state),
}



// Acciones
const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion({commit}, { type }) {
		return new Promise((res, rej) => {
			// Get next ID
			const qID = nextGlobalID()
			commit('addQuestion', { type, qID })
			
			res(qID)
		})
	},
	addOption: ({commit}, { qID }) => {
		const oID = nextGlobalID()
		commit('addOption', { qID, oID })
	},
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	update: ({commit}, payload) => commit( 'update', payload ),
	...make.actions(state),
}

const getters = {
	qSet: state => state.qList.map(id => ({
		id,
		...state.questions[id],
		options: state.questions[id].oList.map(id => state.options[id])
	})),
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