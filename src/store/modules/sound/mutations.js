import Sound from "../../../../domain/sound/sound"

export default {
    getSounds(state, sounds) {
        const dataToDomain = sounds.map(sound => {
            return new Sound(sound)
        })
        console.log(dataToDomain)
        state.sounds = dataToDomain
    }
}