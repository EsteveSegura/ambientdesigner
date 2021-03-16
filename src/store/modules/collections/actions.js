import collections from '../../../../placeholders/collections.json'

export default {
    getCollections({ commit }){
        const data = collections
        console.log(collections)
        commit('getCollections', data);
    },
}