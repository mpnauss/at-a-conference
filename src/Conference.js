class Conference {
    constructor(name, maxRegistrants) {
        this._name = name
        this._maxRegistrants = maxRegistrants
        this.attendees = []
        this.sessions = []
    
    }
    get name() {
        return this._name
    }
    get numberOfSessions() {
        return this.sessions.length
    }
    get numberOfRegistered() {
        return this.attendees.length
    }
    register(person) {
        let isAttending = this.attendees.find((attendee) => {
            return attendee._email === person._email
        })
        if (!isAttending && this.attendees.length < this._maxRegistrants) {
            this.attendees.push(person)
            return true
        } else {
            return false
        }
    }
    addSession(newSession) {
        let alreadyScheduled = this.sessions.find((session) => {
            return session.title === newSession.title
        })
        if (!alreadyScheduled) {
            this.sessions.push(newSession)
        }
    }
    registrationOpen() {
         if (this.numberOfRegistered < this._maxRegistrants) {
             return 'Registration is open'
         } else {
             return 'Registration is closed'
         }
    }
    printSummary() {
        let summary = ''
        summary += this.name + '\n'
        summary += this.numberOfSessions + '\n'
        this.sessions.forEach((session) => {
            summary += session.title + ', facilitated by ' + session.facilitatorName + '\n'
        })
        summary += this.registrationOpen()
        return summary
    }
}

export default Conference