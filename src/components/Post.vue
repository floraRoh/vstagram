<template>
  <div class="post-wrap">
    <p class="user-line">
      <img class="user-image" :src="postData.userImage" />
      <span>{{ postData.name }}</span>
    </p>
    <div
      class="img-line"
      :style="{ backgroundImage: `url(${postData.postImage})` }"
    ></div>
    <div class="pl-2">
      <p class="likes-line">
        <strong>{{ postData.likes }} Likes</strong>
      </p>
      <p class="id-line">
        <span class="id"
          ><strong>{{ postData.filter }}</strong></span
        >
        <span class="content">{{ postData.content }}</span>
      </p>
      <p class="date-line">{{ postData.date }}</p>
    </div>
  </div>
</template>

<script>
import "../assets/styles/post.scss";
export default {
  name: "Post",
  props: {
    postData: Object,
  },
};
</script>