<template>
  <div class="QBuilder">
    <QList v-if="Qs">

      <QItem v-for="(question, index) in Qs" 
        :question="question"
        :index="index"
        :key="index"
      />
    </QList>
    
    <QNew>
      <div class="QNewButton puiSpaceOut">
        <vs-button size="small" radius color="dark" type="border" icon="add" />
        <span>New question</span>
      </div>
    </QNew>

    <QActions />
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
import QList from '@/components/QList'
import QItem from '@/components/QItem'
import QNew from '@/components/elements/QNew'
import QActions from '@/components/QActions'


export default {
  components: {
    QList, QItem, QNew, QActions
  },
  data: () => ({
  }),
  mounted() {
  },
  computed: {
    Qs: get('Qs/qSet'),
  }
}
</script>

<style lang="scss">
  .QBuilder {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;

    .QActions {
      margin-top: auto;
    }
  }
</style>
