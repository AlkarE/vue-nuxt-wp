import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';
import * as actions from "./actions";
import * as getters from "./getters";

const store = () => {
	return new Vuex.Store({
		state: {
			menu: null
		},
		actions,
		mutations: {
			// POSTS: (state, posts) => {
			//     state.posts = posts;
			// },
			// POST: (state, post) => {
			//     state.post = post;
			// }
			MAINMENU: (state, menu) => {
				state.menu = menu;
			}
		},
		getters,
		plugins: [createLogger()]
	})
}

export default store;