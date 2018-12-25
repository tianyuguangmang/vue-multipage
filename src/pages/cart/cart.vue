<template>
  <div>
	<div class="">cart</div>
	<div class="">ifno</div>
	<!-- <a href="../index/index.html">index页面</a> -->
	<navigator link-url="/index/index.html" btn-info="index页面">index页面</navigator>
  </div>
</template>
<script type="text/javascript">
import {navigator} from "components";
//import ElementUI from 'element-ui';
export default {
  name: "cart",
  components:{
  	navigator
  }
};
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,

.fade-leave-active {
  opacity: 0;
}
</style>
