import { createStore } from 'vuex'
import sounds from './modules/sound/';
import collections from './modules/collections/';

export default createStore({
  modules: {
    sounds,
    collections
  }
})

