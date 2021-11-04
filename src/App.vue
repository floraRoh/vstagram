<template>
  <div id="App">
    <Header />
    <Container :postData="postData" :page="page" :imgUrl="imgUrl"/>
    <button @click="morePost(moreIndex)">더보기</button>
    <div id="footer">
      <input @change="upload" type="file" id="file" class="inputfile" accept=".gif, .jpg, .png, .jfif"/>
      <label class="input-plus" for="file">+</label>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import "./assets/styles/app.scss";
import postData from "./assets/data";
import Header from "./components/Header.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      postData: postData,
      moreIndex: 0,
      page: 2,
      imgUrl: ''
    };
  },
  components: {
    Container,
    Header,
  },
  methods: {
    morePost() {
      axios
        .get(`https://floraroh.github.io/vstagram/more${this.moreIndex}.json`)
        .then((result) => {
          this.postData.push(result.data);
          this.moreIndex++;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    upload(e) {
      let files = e.target.files;
      console.log(files[0].type); // image/png 등으로 확인 가능
      this.imgUrl = URL.createObjectURL(files[0]);
      this.page++;
    },
  },
};
</script>