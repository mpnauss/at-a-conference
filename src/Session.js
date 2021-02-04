class Session {
    constructor(title, facilitator, startTime, endTime) {
        this._title = title
        this._facilitator = facilitator
        this._startTime = startTime
        this._endTime = endTime
    }
    get title() {
        return this._title
    }
    get facilitatorName() {
        return this._facilitator.fullName()
    }

}

export default Session