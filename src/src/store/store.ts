import { createStore } from "vuex";

//
// @see https://github.com/vuejs/vuex/tree/v4.0.0-rc.1
//
export const store = createStore({
  state: {
    message: 'Hello',
    // return {
    //   count: 1
    // };
  },

  // ACTIONS (asynchronous)
  actions: {
    up({ commit }) {
      commit("up");
    },
    down({ commit }) {
      commit("down");
    },
    changeTo({ commit }, payload) {
        console.log("changeTo:", payload );
        // commit("changeTo", payload);
    },
    callMutation ({ state, commit }, { newMsg }) {
        console.log("callMutation msg:", newMsg );
        
        commit('changeMessage', newMsg)
      }
  },

  // MUTATIONS ( set the state )
  mutations: {
    up(state: any) {
      state.count = state.count + 1;
    },
    down(state: any) {
      state.count = state.count - 1;
    },
    changeTo(state: any, payload: { value: number }) {
      state.count = payload.value;
    },
    changeMessage (state, newMsg) {
        console.log("changeMessage newMsg:", newMsg );
        state.message = newMsg
      }
  },
  getters: {
    getMsg (state) {
        console.log("getters.getMsg", state.message);
        
      return `${state.message} => Length : ${state.message.length}`
    }
  }
});
