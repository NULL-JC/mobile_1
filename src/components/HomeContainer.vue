<template>
    <div>

        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.thumbURL">
                <img :src="item.thumbURL" alt="">
            </mt-swipe-item>
            
        </mt-swipe>

        <!-- 九宫格区域 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/ziyuan.png" alt="">
		                    <div class="mui-media-body">活动</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/icon_fuwu.png" alt="">
		                    <div class="mui-media-body">服务</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/icon_hulianwang.png" alt="">
		                    <div class="mui-media-body">看世界</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/icon_guanggao.png" alt="">
		                    <div class="mui-media-body">大事件</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/icon_jiaoyu.png" alt="">
		                    <div class="mui-media-body">资源</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/icon_xiaoshou.png" alt="">
		                    <div class="mui-media-body">报名</div></a></li>
		            
		        </ul> 
		    </div> 


    </div>
</template>



<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .jsonp(
          "https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E9%A3%8E%E6%99%AF&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=0&word=%E9%A3%8E%E6%99%AF&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&pn=60&rn=5&gsm=3c&1541666366579="
        )
        .then(result => {
          //   console.log(result.body.data);
          if (result.body != null) {
            this.lunbotuList = result.body.data;
          } else {
            Toast("加载轮播图失败！！！！");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  margin-top: 5px;
  .mint-swipe-item {
    background-color: #ddd;
  }

  img {
    width: 100%;
    height: 100%;
  }
}


.mui-grid-view.mui-grid-9{
  background-color: #fff;
  img{
    width: 40px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
</style>
