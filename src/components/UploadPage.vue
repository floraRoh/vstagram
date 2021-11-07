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
import { mapMutations, mapState } from "vuex";
export default {
  name: "UploadPage",
  computed: {
    ...mapState(["imgUrl", "filters", "selectFilter"]),
  },
  methods: {
    ...mapMutations(["changeImg"]),
  },
};
</script>

<style>
</style>