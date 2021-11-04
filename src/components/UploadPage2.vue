<template>
  <div class="upload-page2">
    <div class="img-div" :style="{ backgroundImage: `url(${imagUrl})` }"></div>
  </div>
</template>

<script>
export default {
  name: "UploadPage2",
  props: {
    imgUrl: String,
  },
};
</script>

<style>
</style>