<template>
  <div id="New">
    <h1 style="margin: 20px">새로운 페이지입니다.</h1>
    <Todolist></Todolist>
  </div>
</template>

<script>
import Todolist from "../components/Todolist.vue";
export default {
  name: "New",
  components: { Todolist },
};
</script>

<style lang="stylus" scoped></style>
