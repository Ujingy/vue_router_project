<template>
  <div class="axios">
    <h1 style="margin: 20px">Axios 활용 페이지입니다.</h1>
    <v-divider></v-divider>
    <select v-model="type">
      <option value="">--choose--</option>
      <option value="1">웹문서</option>
      <option value="2">책검색</option>
      <option value="3">이미지검색</option>
    </select>

    <input
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
    <div v-if="type == 3">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>관련기사</th>
              <th>썸네일</th>
              <th>원본 이미지 링크</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="index">
              <td>
                <a :href="item.doc_url" target="_blank">
                  {{ item.display_sitename }}
                </a>
              </td>
              <td>
                <img :src="item.thumbnail_url" />
              </td>
              <td>
                <a :href="item.image_url" target="_blank">
                  {{ item.image_url }}
                </a>
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
    type: "",
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
        case "3":
          this.callImageData();
          break;
      }
    },

    callWebData() {
      axios
        .get(
          `https://dapi.kakao.com/v2/search/web?query=${this.search}&page=1&size=20&sort=accuracy`,
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
          `https://dapi.kakao.com//v3/search/book?query=${this.search}&page=1&size=20&sort=accuracy`,
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
    callImageData() {
      axios
        .get(
          `https://dapi.kakao.com//v2/search/image?query=${this.search}&page=1&size=20&sort=accuracy`,
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
  border: solid #5b6dcd 1px;
  box-sizing: content-box;
  font-size: 0.9rem;
  padding: 2px 5px;
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
