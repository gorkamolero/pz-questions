<template>
  <PZBoiler id="app">
    <router-view />
  </PZBoiler>
</template>

<script>
import PZBoiler from '@/components/core/PZBoiler'

export default {
  name: 'app',
  components: { PZBoiler }
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
