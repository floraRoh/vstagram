<template>
  <div class="upload-page">
    <div class="img-div" :style="{ backgroundImage: `url(${imgUrl})` }"></div>
    <ul class="filter-line">
      <li
        :class="filter"
        v-for="(filter, i) in filters"
        :key="i"
        :style="{ backgroundImage: `url(${imgUrl})` }"
        @click="changeImg(filter)"
      ></li>
    </ul>
  </div>
</template>

<script>
import "../assets/styles/upload.scss";
export default {
  name: "UploadPage",
  props: {
    imgUrl: String,
    filters: Array,
  },
  methods: {
    changeImg(_filter) {
      document.querySelector(".img-div").className = `img-div ${_filter}`;
    },
  },
};
</script>

<style>
</style>