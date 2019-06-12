<template>
  <div class="QPreview">
    <h1>Preview</h1>

    <ul>
      <li v-for="question in questions">{{ question }}</li>
    </ul>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
export default {
  computed: {
    questions: get('Qs/items')
  }
}
</script>

<style>

</style>
