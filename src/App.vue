<script setup></script>

<template>
  <el-button type="primary">Primary</el-button>
  <RouterView/>
  <div class="test">
    test
  </div>
</template>

<style scoped lang="scss">
  .test{
    color: $priceColor;
  }
</style>
