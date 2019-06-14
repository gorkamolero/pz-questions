<template>
  <div class="QPreview">
    <vue-json-pretty
      :path="'res'"
      :data="questions"
      @click="handleClick">
    </vue-json-pretty>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
import VueJsonPretty from 'vue-json-pretty'

export default {
  components: {
    VueJsonPretty
  },
  computed: {
    questions: get('Qs/items')
  }
}
</script>

<style>

</style>
