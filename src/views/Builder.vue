<template>
  <article class="builder">
    <!-- <Sidebar
      class="sidebar"
      @collapse="reLayout"
      :isCollapsed="isSidebarCollapsed"
      :splitpanes-min="padding"
    /> -->

    <splitpanes>
      <QBuilder splitpanes-size="70" splitpanes-max="70" class="QPane" />
      
      <QPreview splitpanes-size="30" splitpanes-min="30" splitpanes-max="70" class="QPane" />
    </splitpanes>
  </article>
</template>

<script>
import Splitpanes from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

// @ is an alias to /src
// import Sidebar from '@/components/templates/Sidebar'
import QBuilder from '@/components/templates/QBuilder'
import QPreview from '@/components/QPreview'

export default {
  name: 'home',
  data: () => ({
    // isSidebarCollapsed: true
  }),
  components: {
    // Sidebar,
    Splitpanes,
    QBuilder,
    QPreview
  },
  methods: {
    // reLayout () { this.isSidebarCollapsed = !this.isSidebarCollapsed }
  },
  computed: {
    padding () {
      // return this.isSidebarCollapsed ? '50px' : '350px'
    }
  }
}
</script>

<style lang="scss">
  .builder {
    flex: 1;
    display: flex;
    position: relative;
    border: 1px solid var(--light-grey);
    //padding-left: var(--sidebarCollapsed);
  }
  .sidebar {
    position: absolute;
    top: 0;
    height: 100%;
    border-right: 1px solid whitesmoke;

    &.vsm-default + .builder { padding-left: var(--sidebarWidth); }
    &.vsm-collapsed + .builder { padding-left: var(--sidebarCollapsed); }
  }
  .QPane {
    padding: var(--space);
  }
  .splitpanes__splitter {
    box-sizing: content-box;
    background: var(--light-grey);
    border-left: var(--space) solid white;
    border-right: var(--space) solid white;
  }
</style>
