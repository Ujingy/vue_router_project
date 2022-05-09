<template>
  <div class="signup">
    <h1 style="margin: 20px">회원가입 페이지입니다.</h1>
    <v-divider></v-divider>
    <p>회원가입</p>
    <p>ID : <input type="text" v-model="id" /></p>
    <p>PW : <input type="password" v-model="pwd" /></p>
    <p>이름 : <input type="text" v-model="name" /></p>
    <button @click="signUp">가입</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    id: "",
    pwd: "",
    name: "",
  }),

  methods: {
    signUp() {
      axios
        .post("https://api.devcury.kr/auth/user/new", {
          id: this.id,
          pwd: this.pwd,
          name: this.name,
        })
        .then((response) => {
          if (response.status === 201) {
            alert("회원가입 성공");
          }
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    },
  },
};
</script>

<style scoped>
.signup {
  text-align: center;
}
p {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
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
