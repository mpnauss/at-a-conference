class Session {
    constructor(title, facilitator) {
        this._title = title
        this._facilitator = facilitator
    }
    get title() {
        return this._title
    }
    get facilitatorName() {
        return this._facilitator.fullName()
    }

}

export default Session