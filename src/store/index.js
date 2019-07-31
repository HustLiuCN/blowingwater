import Vue from 'vue'
import Vuex from 'vuex'

const store = {
	state: {
		slogan: 'blowing water is coooool !',
	},
}

Vue.use(Vuex)
const vuexStore = new Vuex.Store(store)

export default vuexStore
