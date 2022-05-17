import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import AxiosView from "@/views/AxiosView.vue";
import NewView from "@/views/NewView.vue";
import UserView from "@/views/UserView.vue";
import LoginView from "@/views/login/LoginView.vue";
// import SignUpView from "@/views/login/SignUpView.vue";
// import DeleteUserView from "@/views/DeleteUserView.vue";

export default {
  namespaced: true,

  state: {
    title: "",

    basePath: "/vue_router_project",

    list: {
      home: {
        path: `/home`,
        name: `home`,
        meta: {
          title: `Home`,
          icon: `home`,
          display: true,
        },
        component: HomeView,
      },

      about: {
        path: `/about`,
        name: `about`,
        meta: {
          title: `About`,
          icon: `question_mark`,
          display: true,
        },
        component: AboutView,
      },
      new: {
        path: `/todo`,
        name: `todo`,
        meta: {
          title: `ToDo`,
          icon: `event`,
          display: true,
        },
        component: NewView,
      },
      axios: {
        path: `/axios`,
        name: `axios`,
        meta: {
          title: `Axios`,
          icon: `search`,
          display: true,
        },
        component: AxiosView,
      },
      user: {
        path: `/user`,
        name: `user`,
        meta: {
          title: `User`,
          icon: `account_circle`,
          display: true,
        },
        component: UserView,
      },
      login: {
        path: `/login`,
        name: `login`,
        meta: {
          title: `Login`,
          icon: `login`,
          display: false,
        },
        component: LoginView,
      },
      // signup: {
      //   path: `/signup`,
      //   name: `signup`,
      //   meta: {
      //     title: `Signup`,
      //     icon: `edit`,
      //   },
      //   component: SignUpView,
      // },
      // deleteuser: {
      //   path: `/delete`,
      //   name: `delete`,
      //   meta: {
      //     title: `DeleteUser`,
      //     icon: `delete`,
      //   },
      //   component: DeleteUserView,
      // },
    },

    visible: {
      header: true,
      navi: true,
      footer: true,
    },
  },

  getters: {
    title(state) {
      return state.title;
    },

    basePath(state) {
      return state.basePath;
    },

    menuList(state) {
      return state.list;
    },

    visible(state) {
      return state.visible;
    },
    // list의 object키를 파라미터로 받으면 해당 키에 대한 path를 베이스 path와 합쳐서 반환.
    getPath: (state, getters) => (listKey) => {
      return `${getters.basePath}${state.list[listKey].path}`;
    },
  },

  mutations: {
    setTitle(state, title) {
      state.title = title;
    },

    setAllVisible(state, value) {
      state.visible.header = value;
      state.visible.navi = value;
      state.visible.footer = value;
    },
  },

  actions: {
    setTitle({ commit }, title) {
      commit("setTitle", title);
    },

    /**
     * template에 해당하는 태그들의 유무를 컨트롤
     * @param {*} param0
     * @param {*} value
     */
    setAllVisible({ commit }, value) {
      commit("setAllVisible", value);
    },
  },
};
