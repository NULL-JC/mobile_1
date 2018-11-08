<template>
    <div>

        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.thumbURL">
                <img :src="item.thumbURL" alt="">
            </mt-swipe-item>
            
        </mt-swipe>


        <h3>HomeContainer</h3>
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
</style>
