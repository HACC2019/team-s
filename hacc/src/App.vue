<template>
  <div id="root">
    <router-view></router-view>
  </div>
</template>

<script>
import './../node_modules/materialize-css/dist/css/materialize.min.css'
import './../node_modules/materialize-css/dist/js/materialize'

export default {
  name: 'app',
}
</script>

<style>
#root, html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
