<template>
  <PZBoiler id="app">
    <div class="Container">
      <QBuilder />
    </div>
    <div class="Container">
      <QPreview />
    </div>
  </PZBoiler>
</template>

<script>
import PZBoiler from '@bit/pickzen.pui.core.pz-boiler/PZBoiler'
import QBuilder from './components/QBuilder'
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
}
.Container {
  width: calc(100vw / 3);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & + & { border-left: 1px solid }
}
</style>
