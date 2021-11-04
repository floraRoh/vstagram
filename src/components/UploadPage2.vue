<template>
  <div class="upload-page2">
    <div class="img-div" :style="`background-image: url(${imgUrl})`"></div>
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