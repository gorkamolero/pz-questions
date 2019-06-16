<template>
  <PZBoiler id="app">
    <router-view />
  </PZBoiler>
</template>

<script>
import './tempstyles.scss'
import 'material-icons/iconfont/material-icons.css'
// TODO: put in boiler
import './utils/filters'
import PZBoiler from '@bit/pickzen.pui.core.pz-boiler/PZBoiler'
import QBuilder from './components/templates/QBuilder'
import QPreview from './components/QPreview'

export default {
  name: 'app',
  components: {
    PZBoiler,
    QBuilder,
    QPreview
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  height: 100%;
  border: var(--space-l) solid whitesmoke;
}
.Container {
  width: calc(100vw / 3);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & + & { border-left: 1px solid }
}

.puiSpaceOut { >  * + * { margin-left: var(--space-s) } }
</style>
