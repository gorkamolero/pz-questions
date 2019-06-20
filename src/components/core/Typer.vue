<template>
  <div class="typer" :class="{'fullcenter': fullcenter}" >
    <slot />
  </div>
</template>

<script>
export default {
  props: ['fullcenter']
}
</script>

<style lang="scss">
  .typer {
    max-width: 320px;
    margin: 0 auto;
    font-size: 90%;
    line-height: 1.618;

    h1 {
      font-size: 2em;
      margin-bottom: .618em;
    }

    h3 { font-size: 1.1em; }

    a, a:visited { color: blue }
    pre { margin: 1em 0; }
    code {
      font-size: 80%;
      background: rgba(0, 0, 0, .5);
      color: white;
      padding: 3px;
    }
    * + * { margin-top: .618em; }

    &.fullcenter {
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
