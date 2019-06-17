<template>
  <div class="QPreview">
    <vue-json-pretty :data="questions" />
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
    questions: get('Qs/qSet')
  }
}
</script>

<style>

</style>
