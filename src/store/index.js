import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/pathify'

import questions from './questions'

Vue.use(Vuex)


const state = {}

const store = { state }
window.store = store

export default new Vuex.Store({
  plugins: [ pathify.plugin ],
  ...store,
  modules: { questions }
})