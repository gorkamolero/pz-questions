<template>
  <div class="QNew">
    <v-menu
      class="newQMenu"
      absolute top
      :close-on-content-click="true"
      min-width="260"
    >
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <slot />
        </div>
      </template>

      <vs-card>
        <div slot="header">
          <p>Select question type</p>
        </div>
          <vs-list>
            <vs-list-item
              v-for="item in QTypes"
              class="puiMenuList puiSpaceOut QNewOption"
              :key="item.type"
              :title="item.type | capitalize"
              @click.native="addNewQ(item.type)">
              
              <template slot="avatar">
                <vs-icon :icon="item.icon" />
              </template>
            </vs-list-item>
          </vs-list>
      </vs-card>
	  </v-menu>
  </div>
</template>

<script>
import { get, call } from 'vuex-pathify'
import '@/plugins/vuetify'
import { VMenu } from 'vuetify/lib'


export default {
  components: {
    VMenu
  },
  methods: {
    addQuestion: call('Qs/addQuestion'),
    addNewQ(type) {
      this.addQuestion(type)
    }
  },
  computed: {
    QTypes: get('Qs/QTypes')
  }
}
</script>

<style lang="scss">
  .QNewButton {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: var(--space);

    cursor: pointer;
    
    button { transform: scale(.85); }
  }

  .con-vs-card,
  .vs-card--content {
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
  .vs-list { padding: 0; }

  .QNewOption {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: var(--space);
    font-size: 1rem;
    .vs-list--title {
      font-weight: normal;
      transform: translateY(-2px);
    }
  }
  .vs-card--header {
    padding: var(--space);
    border-bottom: 1px solid var(--light-grey)
  }
  .vs-avatar--text {
    transform: translate(-50%, -50%) scale(0.9) !important;
    &.filter { transform: translate(-50%, -50%) scale(0.75) !important; }
  }
  .splitpanes__pane { overflow: visible !important; }
</style>
