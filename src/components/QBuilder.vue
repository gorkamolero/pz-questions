<template>
  <div class="QBuilder">
    <h1>Lista</h1>
    <QList v-if="questions">
      
      <QItem v-for="(question, index) in questions" 
        :question="question"
        :index="index"
        :key="question"
      />
    </QList>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import QList from '@/components/QList'
import QItem from '@/components/QItem'

export default {
  components: {
    QList, QItem
  },
  data: () => ({
  }),
  computed: {
    questions: sync('questions/items'),
  }
}
</script>

<style>

</style>
