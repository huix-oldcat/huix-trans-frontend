<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu mode="horizontal" :router="true">
          <el-menu-item index="1" route="/">Huix Trans</el-menu-item>
        </el-menu>
      </el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
