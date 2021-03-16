import Collection from "../../../../domain/collection/collection";

export default {
    getCollections(state, collection) {
        const dataToDomain = new Collection(collection) 
        state.collections = dataToDomain
    }
}