<template>
  <div class="container">
    <div v-if="page == 0">
      <Post :postData="postData[i]" v-for="(post, i) in postData" :key="i" />
    </div>
    <UploadPage v-if="page == 1" :imgUrl="imgUrl" :filters="filters" />
    <UploadPage2 v-if="page == 2" :imgUrl="imgUrl" />
  </div>
</template>

<script>
import Post from "./Post.vue";
import UploadPage from "./UploadPage.vue";
import UploadPage2 from "./UploadPage2.vue";
export default {
  name: "Container",
  components: {
    Post,
    UploadPage,
    UploadPage2,
  },
  props: {
    postData: Object,
    page: Number,
    imgUrl: String,
    filters: Array,
  },
};
</script>

<style>
</style>