<template>
  <div class="post-wrap">
    <p class="user-line">
      <img class="user-image" :src="postDataIndex.userImage" />
      <span class="font-medium"><strong>{{ postDataIndex.name }}</strong></span>
    </p>
    <div
      class="img-line"
      :style="{ backgroundImage: `url(${postDataIndex.postImage})` }"
    ></div>
    <div class="pl-2">
      <p class="likes-line">
        <strong>{{ postDataIndex.likes }} Likes</strong>
      </p>
      <p class="id-line">
        <span class="id"
          ><strong class="font-big">{{ postDataIndex.filter }}</strong></span
        >
        <span class="content font-small">{{ postDataIndex.content }}</span>
      </p>
      <p class="date-line font-small">{{ postDataIndex.date }}</p>
    </div>
  </div>
</template>

<script>
import "../assets/styles/post.scss";
// import { mapState } from "vuex";
export default {
  name: "Post",
  props: {
    postDataIndex: Object,
  },
};
</script>