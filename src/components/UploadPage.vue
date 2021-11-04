<template>
  <div class="upload-page">
    <div class="img-div" :style="{ backgroundImage: `url(${imgUrl})` }"></div>
    <ul class="filter-line">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import '../assets/styles/upload.scss'
export default {
  name: "UploadPage",
  props: {
    imgUrl: String,
  },
};
</script>

<style>
</style>