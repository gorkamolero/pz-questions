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
const nextID = items => Math.max.apply(Math, items.map(obj => obj.id + 1))

// Pregunta base!
const qSchema = () => ({
  id: state.items.length > 0 ? nextID(state.items) : 0,
  title: ''
})

// Mutaciones
const mutations = {
	emptyState: state => {
    const s = initState()
    state.items = [...s.items]
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
	updateQuestion: ({items}, { id, content }) => {
    const index = items.findIndex(q => q.id === id)
		Vue.set(items[index], 'title', content)
	},

	...make.mutations(state),
}



// Acciones
const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion: ({commit}, type) => {
    console.log(1, type)
    commit('addQuestion', {
      type,
      ...qSchema()
    })
  },
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