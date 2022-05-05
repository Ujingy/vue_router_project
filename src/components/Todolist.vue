<template>
  <div>
    <main>
      <div class="container">
        <h1>To - Do List</h1>
        <TodoInput @addTodo="addTodo" />

        <ul class="todo_list">
          <li class="todo_list_tit"><p>할 일</p></li>
          <li>
            <p>{{ remaining }} / {{ todolist.length }} 건 선택</p>
            <label class="fini_bt"
              >{{ finicount }} / {{ todolist.length }} 건 완료</label
            >
          </li>
          <li class="del_btn" v-for="(item, index) in todolist" :key="index">
            <p :class="{ finiStyle: item.fini }">
              <input type="checkbox" name="check1" v-model="item.done" />{{
                index + 1
              }}. {{ item.todo }} {{ "[" + item.tododate + "]" }}
            </p>
            <ul class="todo_list_btn">
              <li><button @click="subTodo(index)">삭 제</button></li>
              <li><button @click="finiTodo(index)">완 료</button></li>
            </ul>
          </li>
        </ul>
        <div class="form_btn">
          <li style="list-style-type: none">
            <button @click="cleanTodo">삭제</button>
            <button @click="saveTodo()">저장</button>
          </li>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TodoInput from "./TodoInput.vue";

export default {
  name: "todolist",
  components: {
    TodoInput,
  },
  data: function () {
    return {
      todolist: [
        {
          done: false,
          todo: "Vue.js 정리하기",
          tododate: "2022-04-11",
          fini: false,
        },
        {
          done: false,
          todo: "Vue.js 공부하기",
          tododate: "2022-04-11",
          fini: false,
        },
        {
          done: false,
          todo: "수업 준비하기",
          tododate: "2022-04-15",
          fini: false,
        },
        { done: false, todo: "책 읽기", tododate: "2022-04-11", fini: false },
        {
          done: false,
          todo: "보고서 작성하기",
          tododate: "2022-04-12",
          fini: false,
        },
      ],
    };
  },
  computed: {
    remaining() {
      return this.todolist.filter(function (val) {
        return val.done;
      }).length;
    },
    finicount() {
      return this.todolist.filter(function (val) {
        return val.fini;
      }).length;
    },
  },
  methods: {
    addTodo(val) {
      if (!val[0]) {
        alert("내용을 입력하세요!");
      } else {
        if (!val[1]) {
          alert("종료일을 설정해주세요!");
        } else {
          this.todolist.splice(0, 0, {
            done: false,
            todo: val[0],
            tododate: val[1],
          });
        }
      }
    },
    subTodo(idx) {
      if (confirm(`${idx + 1}번째 항목을 삭제하시겠습니까?`)) {
        this.todolist.splice(idx, 1);
      }
    },
    cleanTodo() {
      const temp_done = this.remaining;
      if (confirm("선택된 항목 모두를 삭제하시겠습니까?")) {
        this.todolist = this.todolist.filter(function (val) {
          return val.done == false;
        });
        alert(`${temp_done}건이 삭제됩니다!`);
      } else {
        alert("삭제가 취소되었습니다.");
      }
    },
    finiTodo(idx) {
      const temp_idx = this.todolist.length - 1;
      const temp = this.todolist[idx];

      alert(`${idx + 1}번째 항목이 완료되었습니다.`);

      this.todolist.splice(idx, 1);
      this.todolist.push(temp);
      return (
        (this.todolist[temp_idx].fini = true),
        (this.todolist[temp_idx].done = true)
      );
    },
    saveTodo() {
      print();
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
.todo_list {
  justify-content: flex-start;
  margin: 20px 0 60px 0;
  height: 600px;
}
.todo_list .todo_list_tit p {
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
}
.todo_list > li {
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: solid 1px #31a5c836;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.todo_list > li input[type="checkbox"] {
  margin-right: 10px;
}
.todo_list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo_list li p:nth-of-type(2) {
  cursor: pointer;
  width: 10px;
  padding-right: 5px;
  display: flex;
  justify-content: flex-end;
}
.todo_list li span,
.todo_list li span::before,
.todo_list li span::after {
  content: "";
  position: absolute;
  background-color: #76c7e4;
  width: 4px;
  height: 4px;
  border-radius: 50px;
}
.todo_list li span {
  cursor: pointer;
  position: relative;
}
.todo_list li span::before,
.todo_list li span::after {
  position: absolute;
  right: 0;
}
.todo_list li span::before {
  top: 10px;
}
.todo_list li span::after {
  top: -10px;
}
.todo_list .todo_list_btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.todo_list .todo_list_btn li {
  background-color: #76c7e4;
  margin: 1px;
}
.todo_list .todo_list_btn li button {
  padding: 5px 10px;
  font-size: 10px;
  color: #fff;
}
.todo_list .todo_list_btn li:first-of-type {
  border-radius: 6px 6px 0 0;
}
.todo_list .todo_list_btn li:last-of-type {
  border-radius: 0 0 6px 6px;
}

.fini_bt {
  width: 100px;
  height: 25px;
  padding: 4px 10px 2px 10px;
  color: #0e93ff;
  background-color: #fff;
  border: solid 1px #0e93ff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin: 2px;
}
.doneStyle {
  text-decoration: line-through;
  color: red;
}
.finiStyle {
  font-weight: bold;
  color: #0e93ff;
  background-color: #f3f9a7;
  text-decoration: underline;
  text-shadow: 0 0 4px #ccc, 0 -5px 4px #ff3;
}
.form_btn button {
  width: 120px;
  height: 35px;
  color: #0e93ff;
  padding: 4px 10px 2px 10px;
  background-color: #fff;
  border: solid 1px #0e93ff;
  border-radius: 4px;
  font-size: 14px;
  margin: 2px;
}
.form_btn button:hover {
  color: #fff;
  background-color: #0e93ff;
  border: solid 1px #fff;
}
</style>
