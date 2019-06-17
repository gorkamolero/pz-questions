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
  items: [
    // {
    //   id: 0,
    //   title: 'Hola, soy el principio!',
    // },
    // {
    //   id: 1,
    //   title: 'Yo estoy en medio'
    // },
    // {
    //   id: 103,
    //   title: 'Yo tambien'
    // },
    // {
    //   id: 2,
    //   title: 'Adiós, soy el Final'
    // }
  ]
})

const state = initState()




// Encontramos el siguiente ID disponible
const returnMax = array => Math.max.apply(Math, array.map(obj => obj.id + 1))
const empty = items => [...items].length > 0
const nextID = () => empty(state.items) ? returnMax(state.items) : 0
const nextOID = () => empty(state.items) ? returnMax( state.items.map(q => q.options).flat() ) : 0

// Pregunta base!
const qSchema = () => ({
  id: nextID(),
	title: '',
	options: [opSchema()]
})
const opSchema = () => ({
	id: nextOID(),
	title: ''
})

// Mutaciones
const mutations = {
	emptyState: state => {
		const s = initState()
		
		if (empty(state.items)) {
			state.items.forEach(item => {
				item.options.forEach(option => {
					Object.keys(option).forEach(key => {
						Vue.set(option, key, opSchema()[key])
					})
				})}
			)
		}
		state.items = [...s.items]
		//state.items.forEach((item, index) => item = s.items[index])
  },
  
  // New Question: ✔
	addQuestion: (state, obj) => {
    state.items.push({...obj})
  },

  // Remove: ✔
	removeQuestion: ({items}, id) => {
		const whichOne = items.findIndex(q => q.id === id)
		items.splice(whichOne, 1)
	},

  // Update: ✔
	updateQuestion: ({items}, { id, content, parent = false }) => {
		const isParent = parent === false
		
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
	addQuestion: ({commit}, type) => commit('addQuestion', { type, ...qSchema() }),
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	updateQuestion: ({commit}, payload) => commit( 'updateQuestion', payload ),
	updateOption: ({commit}, { qId, id, content }) => commit('updateOption', { qId, id, content }),
	...make.actions(state),
}

const getters = make.getters(state)

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