class InstagramUserInconsistencyError extends Error {
    constructor() {
        super("instagram account owner inconsistency");
        this.name = this.constructor.name;
    }
}

module.exports = { InstagramUserInconsistencyError }