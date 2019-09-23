<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">option A</mt-tab-item>
      <mt-tab-item id="2">option B</mt-tab-item>
      <mt-tab-item id="3">option C</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        1
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        2
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        3
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected:1
    }
  },
};
</script>

<style>
</style>