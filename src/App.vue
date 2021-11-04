<template>
  <div id="App">
    <Header :page="page" />
    <Container
      :postData="postData"
      :page="page"
      :imgUrl="imgUrl"
      @moreData="moreData"
      :filters="filters"
    />
    <button @click="morePost(moreIndex)">더보기</button>
    <div id="footer" v-if="page == 0">
      <input
        @change="upload"
        type="file"
        id="file"
        class="inputfile"
        accept=".gif, .jpg, .png, .jfif"
      />
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
      page: 0,
      imgUrl: "",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
  components: {
    Container,
    Header,
  },
  methods: {
    publish() {
      let moreData = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: "https://placeimg.com/640/480/arch",
        likes: 36,
        date: "May 15",
        liked: false,
        content: "오늘 무엇을 했냐면요 아무것도 안했어요 😫",
        filter: "perpetua",
      };
      this.postData.unshift(moreData);
      this.page = 0;
    },
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
      //console.log(files[0].type); // image/png 등으로 확인 가능
      this.imgUrl = URL.createObjectURL(files[0]);
      this.page++;
      console.log(this.imgUrl);
    },
  },
};
</script>