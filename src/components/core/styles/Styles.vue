<template><span class="styles-loaded"></span></template>

<style lang="scss">
 // Welcome to the Pickzen SCSS party!
  @import '~normalize-scss/sass/normalize';
  @include normalize();
  
  @import '~vue2-animate/src/sass/vue2-animate';
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 10%, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  @import './vars', './core', './helpers', './reset';

  // Go ahead, children
  

</style>
