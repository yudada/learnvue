<template>
  <div id="pageQuiNav">
    <roi-nav v-on:navClickEvent="dosth"></roi-nav>
  </div>
</template>

<script>
  import roiNav from '../components/nav_one'
    export default {
        name: "roi_nav",
      components:{
          'roi-nav':roiNav
      },
      methods:{
        dosth:function(items,index){
          console.log(items[index].text + index);
        }
      }
    }
</script>

<style scoped>

</style>
