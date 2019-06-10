<template>
  <Typer :fullcenter="true">
    <slot />
    <h1>Welcome to Pickzen!</h1>
    <h3>If you'd like to start developing components, please do the following:</h3>
    
    <br />
    <p>Open the root directory in a terminal and run:</p>
    <pre><code>$ yarn pui</code></pre>

    <p>Then get rid of this and do as you wish!</p>

    <p><small><a href="https://youneedawiki.com/app/page/1za-PHks6vkA0kT936cmnh4N2GnpAf2w5" target="_blank">Read the docs</a> to learn more about our ecosystem.</small></p>
  </Typer>
</template>

<script>
import Typer from '@bit/pickzen.pui.core.typer/Typer'

export default {
  name: 'HelloWorld',
  components: {
    Typer
  }
}
</script>

<style lang="scss">
.logo { max-width: 100px; }
</style>
