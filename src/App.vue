<template>
  <div id="App">
    <Header :page="page" />
    <Container />
    <div id="footer" v-if="page == 0">
      <button @click="$store.dispatch('getData')" v-if="page == 0">
        <strong>더보기</strong>
      </button>
    </div>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import "./assets/styles/app.scss";
import Header from "./components/Header.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["page", "moreIndex", "postData"]),
  },
  components: {
    Container,
    Header,
  },
};
</script>