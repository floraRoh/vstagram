<template>
  <div class="upload-page2">
    <div
      :class="selectFilter"
      class="img-div"
      :style="`background-image: url(${imgUrl})`"
    ></div>
    <textarea @input ="changeText($event.target.value)"></textarea>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "UploadPage2",
  computed: {
    ...mapState(["imgUrl", "selectFilter", "postText"]),
  },
  methods: {
    ...mapMutations(["changeText"]),
  }
};
</script>

<style>
</style>