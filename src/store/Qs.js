import Vue from 'vue'
import { scaffoldStore } from 'undo-redo-vuex'
import { make } from 'vuex-pathify'
import { deleteProp } from '@/utils/methods'

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
	options: {}
})
window.initState = initState()

const state = initState()

window.state = state




// Encontramos el siguiente ID disponible
const returnMax = array => Math.max.apply(Math, array)
const empty = items => items.length > 0
const nextID = array => empty(array) ? returnMax(array) + 1 : 0

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
		// const s = Object.assign({}, initState)

		state.questions = { ...s.questions }
		//Vue.set(state, 'questions', { ...s.questions })
		state.options = {}
		state.qList = []
  },
  
  // New Question: ✔
	addQuestion: (state, type) => {
		const q = {...qSchema(), type},
					id = nextID(state.qList)
		
		Vue.set(state.questions, id, q)
		state.qList.push(id)
  },

  // Remove: ✔
	removeQuestion: ({questions, qList}, id) => {
		Vue.delete(questions, id)
		Vue.delete(qList, qList.findIndex(q => q === id))
	},

	// Update: ✔
	update: (state, { id, field, type, content }) => {
		Vue.set(state[type][id], field, content)
	},
	
	/* updateQuestion: (state, { id, content, parent = false }) => {

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
	}, */

	...make.mutations(state),
}



// Acciones
const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion: ({commit}, type) => commit('addQuestion', type),
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	update: ({commit}, payload) => commit( 'update', payload ),
	...make.actions(state),
}

const getters = {
	qSet: state => state.qList.map(id => ({id, ...state.questions[id] })),
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