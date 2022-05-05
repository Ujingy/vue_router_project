<template>
  <div class="container">
    <ul class="list_add">
      <li class="list_add_tit"><p>등록 하기</p></li>
      <li>
        <p>
          <input type="text" v-model="addText" /><input
            type="date"
            v-model="setDate"
          /><button @click="addTodo">등 록</button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todoinput",
  data: function () {
    return {
      addText: "",
      setDate: "",
    };
  },
  methods: {
    addTodo() {
      this.$emit("addTodo", [this.addText, this.setDate]);
      this.addText = "";
      this.setDate = "";
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0px;
  width: 100%;
  max-width: 900px;
}
.container > ul {
  margin-top: 20px;
  box-shadow: 2px 1px 10px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-size: 15px;
  width: 90%;
  border: solid 1px #009fff;
  border-radius: 6px;
  list-style-type: none;
}
.container > ul li:first-of-type {
  border-radius: 5px 5px 0 0;
  background-color: #0e93ff;
  box-sizing: border-box;
}
.container > ul li:first-of-type p {
  padding: 10px 10px;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
}
.h1 {
  font-size: 35px;
  color: #fff;
}

.list_add li {
  padding: 10px 0px;
  width: 100%;
  box-sizing: border-box;
}
.list_add li:first-of-type {
  border-bottom: solid 1px #009fff;
}
.list_add li p {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  box-sizing: border-box;
  text-align: start;
}
.list_add li input[type="text"] {
  outline: 0;
  border: solid 1px #fff;
  border-bottom: solid 1px #009fff;
  width: 87%;
  font-size: 15px;
  margin-right: 10px;
  padding: 5px 5px 0 5px;
  box-sizing: border-box;
  box-shadow: inset 0 1px 1px #009fff;
  box-shadow: none !important;
}
.list_add li input[type="date"] {
  outline: 0;
  border: solid 1px #fff;
  border-bottom: solid 1px #009fff;
  width: 20%;
  font-size: 15px;
  color: #31a5c8;
  margin-right: 10px;
  padding: 5px 5px 0 5px;
  box-sizing: border-box;
  box-shadow: inset 0 1px 1px #009fff;
  box-shadow: none !important;
}
.list_add li input:focus {
  outline: none;
}
.list_add li button {
  box-sizing: border-box;
  width: 10%;
  padding: 4px 10px 2px 10px;
  color: #31a5c8;
  background-color: #fff;
  border: solid 1px #009fff;
  border-radius: 4px;
}
.list_add li button:hover {
  color: #fff;
  background-color: #009fff;
  border: solid 1px #fff;
}
</style>
