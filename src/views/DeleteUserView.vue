<template>
  <div class="delete">
    <h1 style="margin: 20px">사용자 삭제 페이지입니다.</h1>
    <v-divider></v-divider>
    <p>사용자 삭제</p>
    <p>토큰 : <input type="text" v-model="token" /></p>
    <button @click="deleteUser">삭제</button>
    <p>{{ token }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    token: "",
  }),
  methods: {
    deleteUser() {
      if (!confirm("정말로 삭제 하시겠습니까?")) {
        return false;
      }
      axios
        .delete("https://api.devcury.kr/api/auth/user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            alert("삭제되었습니다.");
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
.delete {
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
