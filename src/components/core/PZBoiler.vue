<template>
  <transition name="fadeUp">
    <div class="loader" v-show="isLoaded">
      <FontLoader @fontLoaded="onFontLoaded" />
      <VuesaxLoader @vuesaxLoaded="onVuesaxLoaded" />
      <Styles />
      <slot />
    </div>
  </transition>
</template>

<script>
import Styles from '@/components/core/styles/Styles'
import FontLoader from '@bit/pickzen.pui.core.font-loader/FontLoader.vue'
import 'material-icons/iconfont/material-icons.css'
import VuesaxLoader from '@bit/pickzen.pui.core.vuesax-loader/VuesaxLoader.vue'

import '@/utils/filters'
import '@/plugins/observeVisibility'

export default {
  components: {
    VuesaxLoader,
    FontLoader,
    Styles,
  },
  data: () => ({
    vuesaxLoaded: false,
    fontLoaded: false
  }),
  methods: {
    onVuesaxLoaded () {
      // eslint-disable-next-line
      console.log('✔ Vuesax loaded!')
      this.vuesaxLoaded = true
    },
    onFontLoaded () {
      // eslint-disable-next-line
      console.log('✔ Font is loaded!')
      this.fontLoaded = true
    }
  },
  computed: {
    isLoaded: self => self.vuesaxLoaded && self.fontLoaded
  }
}
</script>

<style></style>
