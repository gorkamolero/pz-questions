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
    id: 0,
    title: 'Hola, soy el principio!',
  },
  {
    id: 1,
    title: 'Yo estoy en medio'
  },
  {
    id: 2,
    title: 'Yo tambien'
  },
  {
    id: 3,
    title: 'Adiós, soy el Final'
  }
]

const initQs2 = [
  {
    id: 0,
    title: 'Hola, soy el principio!',
  },
  {
    id: 1,
    title: 'Yo estoy en medio'
  },
  {
    id: 2,
    title: 'Yo tambien'
  },
  {
    id: 3,
    title: 'Adiós, soy el Final'
  }
]

let state = {
  items: []
  //items: [ ...initQs ]
}

initQs.forEach((question, index) => {
  state.items[index] = { ...question }
})

const actions = {
	reload: ({commit}) => commit( 'emptyState' ),
	addQuestion: ({commit}) => commit('addQuestion', ''),
	removeQuestion: ({commit}, id) => commit('removeQuestion', id),
	updateQuestion: ({commit}, { id, content }) => commit( 'updateQuestion', { id, content } ),
	...make.actions(state),
}

const mutations = {
	emptyState: (state) => {
    //state.items = [...initQs]
    
    initQs.forEach((question, index) => {
      Object.entries(question).forEach(([key, value]) => {
        Vue.set(state.items[index], key, value)
      })
    })
	},
	// Set items and so on	
	addQuestion: (state, question) => state.items.push(question),
	removeQuestion: ({items}, id) => {
		const whichOne = items.findIndex(q => q.id === id)
		items.splice(whichOne, 1)
	},

	updateQuestion: ({items}, { id, content }) => {
    const index = items.findIndex(q => q.id === id)
    console.log(index)
		Vue.set(items[index], 'title', content)
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


