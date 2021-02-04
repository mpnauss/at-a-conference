class Person {
    constructor(firstName, lastName, email) {
        this._firstName = firstName
        this._lastName = lastName
        this._email = email
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`
    }

}

export default Person