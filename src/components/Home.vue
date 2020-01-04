<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      /**
       * 退出功能的实现
       * 由于是通过把token存放在sessionStorage中实现的,所以退出时清空sessionStorage，并跳转到登录页面就可以了
       */
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$message('退出成功')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
