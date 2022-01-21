<style scoped>
	.each-work-sery {
		margin-top: 25px;
	}

	.each-work-sery .works-title{
		font-size: 20px;
		font-weight: bold;
		color: #333;
	}

	.works-date{
		margin-top: 10px;
		font-size: 12px;
		color: #666;
	}

	.ul-pic li{
		float: left;
		width: 160px;
		margin-right: 15px;
		margin-bottom: 15px;
		list-style: none;
		text-align: center;
	}
	
	.ul-pic .pic{
		margin: 0;
	}
	.ul-pic .pic-desc{
		height: 30px;
		line-height: 30px;
		margin: 0;
		background: #5cb85c;
		color: #fff;
		font-family: "微软雅黑";
	}
	.picture{
		border: 1 px solid #000;
		width: 300px;
		height: 100px;
		overflow: hidden;
	}
	img{
		width: auto;
    	height: auto;
    	max-width: 100%;
    	max-height: 100%;
	}
</style>

<template>
  <section class="container">
  	   <div class="each-work-sery">	
	  	   <h2 class="works-title">作品图</h2>
	  	   <p class="works-date">2020.01-2020.05</p>
	       <ul class="clearfix ul-pic">
	       		<li v-for="item in pictures">
					<div class="picture">
						<img v-bind:src=item.img alt="文章图片">
					</div>
	       		</li>
	       </ul>

       </div>
  </section>
</template>


<script>
var $ = require('../../static/js/common/jquery')

var alert;
export default {
  ready: function () {
  	var that = this;
    //图片列表
    $.getJSON('../../static/json/picture.json', function(d) {
      		
      //判断接口是否请求成功
      if(d.code!=200){
      	return false;
      }
      //设置数据
      that.$set('pictures', d.data.picture);
    }).error(function(data, status, request) {
      console.log('fail' + status + "," + request);
    });
      
  },
  destroyed () {
  },
  components: {
    share: require('./share.vue')
  },
  data () {
    return {
      pictures: [],
    }
  },
  methods: {
    hello: function () {
    }
  }
}
</script>