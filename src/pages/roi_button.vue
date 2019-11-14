<template>
  <div id="pageQuiButton">
    <roi-btn msg="确认"  class="small">
      <img slot="icon" class="ico" src="xxx.png" />
      <span>xxxxxxxxx</span>
    </roi-btn>
    <roi-btn msg="删除" v-on:btnClickEvent="doSth" ><img slot="icon" class="ico" src="xxx1.png" /></roi-btn>
    <roi-btn msg="新增" v-on:btnClickEvent="doSth2"><img slot="icon" class="ico" src="xxx2.png" /></roi-btn>
  </div>
</template>

<script>
  import roiBtn from '../components/btn.vue'
    export default {
        name: "roi_button",
      components:{
        'roi-btn': roiBtn
      },
      methods: {
        doSth: function(){
          alert('你点击了组件的click:btnClickEvent');
        },
        doSth2: function(){
          alert('你点击了组件的click:btnClickEvent1');
        }
      }
    }
</script>

<style scoped>
</style>
