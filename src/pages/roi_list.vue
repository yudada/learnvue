<template>
  <div id="pageQuiList">
    <roi-list tipsText="自定义文案，默认右边是按钮" msg="弹层"></roi-list>
    <roi-list v-on:clickEvent="test"></roi-list>
    <roi-list ref="child1" tipsText="最右边是箭头" currentView="roi-arrow"></roi-list>
  </div>
</template>

<script>
  import roiList from '../components/list_one'
    export default {
        name: "roi_list",
      components: {
        'roi-list': roiList
      },
      methods:{
        test:function(){
          alert("我是自定义的方法");
        }
      },
      beforeCreate:function(){},//组件实例化之前
      created:function(){},//组件实例化了
      beforeMount:function(){},//组件写入dom结构之前
      mounted:function(){//组件写入dom结构了
        console.log(this.$el);
        console.log(this.$children);
        console.log(this.$refs);
        console.log(this.$refs.child1.msg);
      },
      beforeUpdate:function(){},//组件更新前
      updated:function(){},//组件更新比如修改了文案
      beforeDestroy:function(){},//组件销毁之前
      destroyed:function(){}//组件已经销毁
    }
</script>

<style scoped>

</style>
