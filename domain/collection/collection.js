class Collection {
    constructor({ id, listSounds, createdAt, updatedAt }) {
        this.id = id;
        this.listSounds = listSounds;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    get id() {
        return this._id
    }

    set id(id) {
        if (!id) {
            throw new Error("Collection id already exists")
        }

        this._id = id
    }

    get listSounds(){
        return this._listSounds
    }

    set listSounds(listSounds){
        if(!listSounds){
            throw new Error("Collection listsound already exists")
        }

        this._listSounds = listSounds;
    }


    get createdAt() {
        return this._createdAt
    }

    set createdAt(createdAt) {
        if (!createdAt) {
            throw new Error("Collection createdAt already exists")
        }

        this._createdAt = createdAt
    }

    get updatedAt() {
        return this._updatedAt
    }

    set updatedAt(updatedAt) {
        if (!updatedAt) {
            throw new Error("Collection updatedAt already exists")
        }

        this._updatedAt = updatedAt
    }
}

module.exports = Collection;