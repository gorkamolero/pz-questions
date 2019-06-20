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
</style>
