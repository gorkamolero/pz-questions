import Vue from 'vue'

export const deleteProp = (obj, props) => {
  const prop = props.shift()
  if (!obj[prop]) return

  if (!props.length) {
    Vue.delete(obj, prop)
    return
  }
  deleteProp(obj[prop], props)
}
