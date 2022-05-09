<template>
  <div class="login">
    <h1 style="margin: 20px">로그인 페이지입니다.</h1>
    <v-divider></v-divider>
    <p>로그인</p>
    <p>ID : <input type="text" v-model="id" /></p>
    <p>PW : <input type="password" v-model="pwd" /></p>
    <button @click="login">로그인</button>
    <p>{{ token }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    id: "",
    pwd: "",
    token: "",
  }),
  methods: {
    login() {
      axios
        .post("https://api.devcury.kr/auth/user", {
          id: this.id,
          pwd: this.pwd,
        })
        .then((response) => {
          this.token = response.data.token;
          alert("토큰 발급 성공");
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    },
  },
};
</script>

<style scoped>
.login {
  text-align: center;
}
p {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-indent: 2ch;
}
input {
  margin: 20px;
  margin-right: 10px;
  outline-color: #009fff;
  border: solid 1px #fff;
  border-bottom: solid 1px #009fff;
  width: 20%;
  font-size: 15px;
  padding: 5px 5px 0 5px;
  box-sizing: border-box;
  box-shadow: inset 0 1px 1px #009fff;
  box-shadow: none !important;
}
button {
  background-color: #009fff;
  margin: 1px;
  padding: 5px 10px;
  border-radius: 6px 6px 6px 6px;
  color: #fff;
}
</style>
