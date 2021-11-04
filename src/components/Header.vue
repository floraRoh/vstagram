<template>
  <header>
    <ul>
      <li>Cancel</li>
      <li><img alt="Vue logo" src="../assets/logo.png" /></li>
      <li>Next</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
header {
  padding:20px 0;
  margin-bottom: 1.3rem;
  border-bottom: 1px solid #ededed;
  width:100%;
  max-width:600px;
  position:sticky;
  top:-1px;
  left:0;
  background:white;
}
header ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
header ul li {
  height: 40px;
  line-height: 40px;
  font-size: 1.9rem;
  color: #9bbfff;
  font-weight: 500;
}
</style>