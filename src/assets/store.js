import { createStore } from "vuex";
import data from "./data";
import axios from "axios";

const store = createStore({
  state() {
    return {
      postData: data,
      page: 0,
      imgUrl: "",
      selectFilter: "",
      moreIndex: 0,
      postText: "",
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
  mutations: {
    changeText(state, _text) {
      state.postText = _text;
    },
    movePage2(state) {
      state.page = 2;
    },
    moveMainPage(state) {
      state.page = 0;
    },
    changeImg(state, _filter) {
      document.querySelector(".img-div").className = `img-div ${_filter}`;
      state.selectFilter = _filter;
    },
    upload(state, url) {
      // console.log(files[0].type); // image/png 등으로 확인 가능
      state.imgUrl = URL.createObjectURL(url[0]);
      state.page++;
    },
    publishPost(state, _text) {
      console.log(state, _text);
      let moreData = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: state.imgUrl,
        likes: 36,
        date: new Date().toLocaleDateString(),
        liked: false,
        content: state.postText,
        filter: state.selectFilter,
      };
      state.postData.unshift(moreData);
      state.page = 0;
    },
  },
  actions: {
    getData(context) {
      axios
        .get(`https://floraroh.github.io/vue-insta/more${context.state.moreIndex}.json`)
        .then((result) => {
          context.state.postData.push(result.data);
          context.state.moreIndex++;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
