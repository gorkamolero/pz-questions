import Vue from 'vue'
import Vuex from 'vuex'
import pathify from '@/plugins/pathify'

import questions from './questions'
import simple from './questions-simple'
import Qs from './Qs'

import undoRedo from 'undo-redo-vuex'

Vue.use(Vuex)


const state = {}

const store = { state }
window.store = store

export default new Vuex.Store({
  plugins: [
    pathify.plugin,
    undoRedo({
      paths: [
        {
          namespace: 'questions',
          //ignoreMutations: ['addQuestion']
        },
        {
          namespace: 'simple'
        },
        {
          namespace: 'Qs',
          ignoreMutations: ['empty']
        }
      ]
    })
  ],
  ...store,
  modules: { questions, simple, Qs }
})