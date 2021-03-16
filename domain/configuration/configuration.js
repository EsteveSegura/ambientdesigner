class Configuration {
    constructor({ id, filters, volume, createdAt, updatedAt }) {
        this.id = id;
        this.filters = filters;
        this.volume = volume;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    get id() {
        return this.id
    }

    set id(id) {
        if (!id) {
            throw new Error("Configuration id already exists")
        }

        this.id = id
    }

    get filters() {
        return this.filters
    }

    set filters(filters) {
        if (!filters) {
            throw new Error("Configuration filters already exists")
        }

        this.filters = filters
    }

    get volume() {
        return this.volume
    }

    set volume(volume) {
        if (!volume) {
            throw new Error("Configuration volume already exists")
        }

        this.volume = volume
    }

    get createdAt() {
        return this.createdAt
    }

    set createdAt(createdAt) {
        if (!createdAt) {
            throw new Error("Configuration createdAt already exists")
        }

        this.createdAt = createdAt
    }

    get updatedAt() {
        return this.updatedAt
    }

    set updatedAt(updatedAt) {
        if (!updatedAt) {
            throw new Error("Configuration updatedAt already exists")
        }

        this.updatedAt = updatedAt
    }
}

module.exports = Configuration;