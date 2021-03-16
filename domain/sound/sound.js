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
        return this.id
    }

    set id(id) {
        if (!id) {
            throw new Error("Sound id already exists")
        }

        this.id = id
    }

    get name() {
        return this.name
    }

    set name(name) {
        if (!name) {
            throw new Error("Sound name already exists")
        }

        this.name = name
    }

    get path() {
        return this.path
    }

    set path(path) {
        if (!path) {
            throw new Error("Sound path already exists")
        }

        this.path = path
    }

    get soundLength() {
        return this.soundLength
    }

    set soundLength(soundLength) {
        if (!soundLength) {
            throw new Error("Sound soundLength already exists")
        }

        this.soundLength = soundLength
    }

    get configuration() {
        return this.configuration
    }

    set configuration(configuration) {
        if (!configuration) {
            throw new Error("Sound configuration already exists")
        }

        this.configuration = configuration
    }

    get createdAt() {
        return this.createdAt
    }

    set createdAt(createdAt) {
        if (!createdAt) {
            throw new Error("Sound createdAt already exists")
        }

        this.createdAt = createdAt
    }

    get updatedAt() {
        return this.updatedAt
    }

    set updatedAt(updatedAt) {
        if (!updatedAt) {
            throw new Error("Sound updatedAt already exists")
        }

        this.updatedAt = updatedAt
    }
}

module.exports = Sound;