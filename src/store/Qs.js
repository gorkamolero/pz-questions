import Vue from 'vue'
import { scaffoldStore } from 'undo-redo-vuex'
import { make } from 'vuex-pathify'
var _ = require('lodash')

const initState = () => ({
  items: [
    {
      id: 0,
      title: 'Hola, soy el principio!',
    },
    {
      id: 1,
      title: 'Yo estoy en medio'
    },
    {
      id: 103,
      title: 'Yo tambien'
    },
    {
      id: 2,
      title: 'Adiós, soy el Final'
    }
  ]
})

const state = initState()




// Encontramos el siguiente ID disponible
const nextID = items => Math.max.apply(Math, items.map(function(obj) { return obj.id + 1 }))

// Pregunta base!
const qSchema = () => ({
  id: nextID(state.items),
  title: ''
})

// Mutaciones
const mutations = {
	emptyState: state => {
    const s = initState()
    state.items = [...s.items]
  },
  
  // New Question: ❌
	addQuestion: (state, obj) => {
    state.items.push({...obj})
  },

  // Remove: ✔
	removeQuestion: ({items}, id) => {
		const whichOne = items.findIndex(q => q.id === id)
		items.splice(whichOne, 1)
	},

  // Update: ✔
	updateQuestion: ({items}, { id, content }) => {
    const index = items.findIndex(q => q.id === id)
		Vue.set(items[index], 'title', content)
	},

	...make.mutations(state),
}



// Acciones
const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion: ({commit}) => commit('addQuestion', Object.assign({}, qSchema())),
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	updateQuestion: ({commit}, { id, content }) => commit( 'updateQuestion', { id, content } ),
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