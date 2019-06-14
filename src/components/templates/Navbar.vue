<template>
  <vue-navigation-bar :options="navbarOptions"/>
</template>

<script>
import VueNavigationBar from 'vue-navigation-bar'
import 'vue-navigation-bar/dist/vue-navigation-bar.css'

export default {
  name: 'Navbar',
  components: {
    VueNavigationBar
  },
  data: () => ({
    navbarOptions: {
      elementId: 'main-navbar',
      isUsingVueRouter: true,
      mobileBreakpoint: 768,
      brandImagePath: './',
      brandImage: require('../../assets/enso.png'),
      brandImageAltText: 'Pickzen',
      showBrandImageInMobilePopup: true,
      ariaLabelMainNav: 'Main Navigation',
      menuOptionsLeft: [
        {
          type: 'link',
          text: 'This Pickzen',
          path: './'
        }
      ],
      menuOptionsRight: [
        {
          type: 'link',
          text: 'About test',
          path: './about'
        },
        {
          type: 'link',
          text: 'Navlink 2',
          path: './'
        },
        {
          type: 'link',
          text: 'Navlink 3',
          path: './'
        },
        {
          type: 'spacer',
          text: ' | '
        },
        {
          type: 'link',
          text: 'User Section',
          path: './'
        }
      ]
    }
  })
}
</script>

<style lang="scss">
</style>
