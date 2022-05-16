<template>
  <div class="todo">
    <h1 style="margin: 20px">To-Do List 기능을 구현한 새로운 페이지입니다.</h1>
    <v-divider></v-divider>
    <Todolist></Todolist>
  </div>
</template>

<script>
import Todolist from "../components/Todolist.vue";
export default {
  name: "todo",
  components: { Todolist },
};
</script>

<style lang="stylus" scoped></style>
