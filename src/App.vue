<template>
  <div class="app-container">

    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="首页" style="background-color: #FF6631;"></mt-header>

    <!-- 中间路由 router-view 区域 -->

		<router-view></router-view>



    <!-- 底部 Tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/consult">
				<span class="mui-icon mui-icon-chatboxes"></span>
				<span class="mui-tab-label">社团咨询</span>
			</router-link>
			<router-link class="mui-tab-item" to="/activity">
				<span class="mui-icon mui-icon-map">
					<span class="mui-badge">3</span>
				</span>
				<span class="mui-tab-label">活动</span>
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon mui-icon-navigate"></span>
				<span class="mui-tab-label">个人信息</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
}
</style>
