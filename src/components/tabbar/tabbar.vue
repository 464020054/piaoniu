<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style>
#tabbar {
  height: 52px;
  box-shadow: 0px 0px 5px #ccc;
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: #fff;
}
</style>