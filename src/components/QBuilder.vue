<template>
  <div class="QBuilder">
    <h1>Lista</h1>
    <br>
    <QList v-if="Qs">
      
      <QItem v-for="(question, index) in Qs" 
        :question="question"
        :index="index"
        :key="index"
      />
    </QList>

    <QActions />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
import QList from '@/components/QList'
import QItem from '@/components/QItem'
import QActions from '@/components/QActions'

export default {
  components: {
    QList, QItem, QActions
  },
  data: () => ({
  }),
  mounted() {
  },
  computed: {
    Qs: get('Qs/items'),
  }
}
</script>

<style lang="scss">
  .QBuilder {
    position: relative;
  }
</style>
