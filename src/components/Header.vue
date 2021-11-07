<template>
  <header class="flex-between-center">
    <ul class="flex-between-center">
      <li class="font-big" @click="moveMainPage()">cancel</li>
      <li class="font-big logo" @click="moveMainPage()">
        <img alt="Vue logo" src="../assets/logo.png" />
      </li>
      <li v-if="page == 0">
        <input
          @change="upload($event.target.files)"
          type="file"
          id="file"
          class="inputfile"
          accept=".gif, .jpg, .png, .jfif"
        />
        <label class="input-plus font-big" for="file">update</label>
      </li>
      <li class="font-big" v-if="page == 1" @click="movePage2()">Next</li>
      <li class="font-big" v-if="page == 2" @click="publishPost()">Upload</li>
    </ul>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["page", "imgUrl"]),
  },
  methods: {
    ...mapMutations([
      "movePage2",
      "moveMainPage",
      "publishPost",
      "upload"
    ]),
  },
};
</script>