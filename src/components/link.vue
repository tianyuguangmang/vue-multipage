<template>
	<div class="">
		<a :href="linkUrl"></a>
	</div>
</template>
<script type="text/javascript">
import IS_PRO from "../base.config"
export default {
  name: "link",
  props:{
  	linkUrl:{
  		type:String
  	}
  },
  created(){
  	if(!IS_PRO){
  		this.linkUrl = "#"+ this.linkUrl
  	}
  }
};
</script>
<style lang="scss" type="text/css">


</style>
