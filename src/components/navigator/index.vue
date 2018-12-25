<template>
	<div class="">
		<a :href="pageUrl">{{btnInfo}}</a>
	</div>
</template>
<script type="text/javascript">
import {IS_PRO} from "src/base"
export default {
  name: "navigator",
  data(){
    return {
     // pageUrl:"/"
    }
  },
  props:{
  	linkUrl:{
  		type:String
  	},
    btnInfo:{
      type:String
    }
  },
  created(){
    console.log(this.linkUrl);
    if(!IS_PRO){
      this.pageUrl = "#"+ this.linkUrl
    }else{
      this.pageUrl = this.linkUrl
    }
  },
  computed:{
    
  	
  }
};
</script>
<style lang="scss" type="text/css">


</style>
