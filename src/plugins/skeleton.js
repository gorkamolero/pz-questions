import Vue from 'vue'
import skeleton from 'tb-skeleton'
import  'tb-skeleton/dist/skeleton.css'
Vue.use(skeleton)

import VueFractionGrid from 'vue-fraction-grid'
Vue.use(VueFractionGrid, {
  //container: '100%',
  gutter: '8px'
})