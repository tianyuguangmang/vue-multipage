<template>
  <div>
	<div class="">index</div>
	<div class="">ifno</div>
	<navigator link-url="/cart/cart.html" btn-info="index页面">cart页面</navigator>
  </div>
</template>
<script type="text/javascript">
import {navigator} from "components";
export default {
  name: "index",
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
