<template>
  <div id="app">
    <h1 class="page-title">
      <a href="#/">{{title}}</a>
    </h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      title:'开发组件库'
    }
  }
}
</script>

<style>
  @import './assets/css/App.css';
</style>
