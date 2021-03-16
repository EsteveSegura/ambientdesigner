import sounds from '../../../../placeholders/sounds.json'

export default {
    getSounds({ commit }){
        const data = sounds.sounds
        commit('getSounds', data);
    },
}