<template>
  <div class="axios">
    <h1 style="margin: 20px">Axios 활용 페이지입니다.</h1>
    <v-divider></v-divider>
    <select v-model="type">
      <option value="1">웹문서</option>
      <option value="2">책검색</option>
    </select>

    <input
      style="margin: 20px"
      type="text"
      v-model="search"
      @keyup.enter="callData"
      placeholder="검색할 내용을 적으세요"
    />
    <button @click="callData">검색</button>

    <div v-if="type == 1">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="index">
              <td>
                <a :href="item.url" target="_blank">
                  <span v-html="item.title"></span>
                </a>
              </td>
              <td>
                <span v-html="item.contents"></span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div v-if="type == 2">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="index">
              <td>
                <a :href="item.url" target="_blank">
                  <span v-html="item.title"></span>
                </a>
              </td>
              <td>
                <span v-html="item.contents"></span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    type: "1",
    search: "",
    list: [],
  }),

  methods: {
    callData() {
      switch (this.type) {
        case "1":
          this.callWebData();
          break;
        case "2":
          this.callBookData();
          break;
      }
    },

    callWebData() {
      axios
        .get(
          `https://dapi.kakao.com/v2/search/web?query=${this.search}&page=1&size=10&sort=recency`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.list = response.data.documents;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    callBookData() {
      axios
        .get(
          `https://dapi.kakao.com//v3/search/book?query=${this.search}&page=1&size=10&sort=accuracy`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.VUE_APP_KAKAO_KEY}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.list = response.data.documents;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
select {
  margin-left: 10px;
  outline: solid 1px #009fff;
  box-sizing: content-box;
  border: solid #5b6dcd 1px;
  padding: 5px;
}

input {
  outline-color: #009fff;
  border: solid 1px #fff;
  border-bottom: solid 1px #009fff;
  width: 20%;
  font-size: 15px;
  margin-right: 10px;
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
