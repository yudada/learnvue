<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <slot></slot>
    <span>{{msg}}</span>
    <span v-if="show">123</span>
<!--    <slot></slot>-->
  </button>
</template>

<script>
    export default {
        name: "btn",
      data:function(){
        return {
          show:false
        }
      },
      props:{
          msg:{
            default:"下载"
          }
      },
      methods: {
        btnClickEvent: function(){
          alert(this.msg);
          this.$emit('btnClickEvent');
        }
      }
    }
</script>

<style scoped>
  @import './css/reset.css';
  @import './css/btn.css';
</style>
