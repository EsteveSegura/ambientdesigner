class Sound {
    constructor({ id, name, path, soundLength, configuration, createdAt, updatedAt }) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.soundLength = soundLength;
        this.configuration = configuration;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    get id() {
        return this._id
    }

    set id(id) {
        if (!id) {
            throw new Error("Sound id already exists")
        }

        this._id = id
    }

    get name() {
        return this._name
    }

    set name(name) {
        if (!name) {
            throw new Error("Sound name already exists")
        }

        this._name = name
    }

    get path() {
        return this._path
    }

    set path(path) {
        if (!path) {
            throw new Error("Sound path already exists")
        }

        this._path = path
    }

    get soundLength() {
        return this._soundLength
    }

    set soundLength(soundLength) {
        if (!soundLength) {
            throw new Error("Sound soundLength already exists")
        }

        this._soundLength = soundLength
    }

    get configuration() {
        return this._configuration
    }

    set configuration(configuration) {
        if (!configuration) {
            throw new Error("Sound configuration already exists")
        }

        this._configuration = configuration
    }

    get createdAt() {
        return this._createdAt
    }

    set createdAt(createdAt) {
        if (!createdAt) {
            throw new Error("Sound createdAt already exists")
        }

        this._createdAt = createdAt
    }

    get updatedAt() {
        return this._updatedAt
    }

    set updatedAt(updatedAt) {
        if (!updatedAt) {
            throw new Error("Sound updatedAt already exists")
        }

        this._updatedAt = updatedAt
    }
}

module.exports = Sound;