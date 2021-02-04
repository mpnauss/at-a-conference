import Person from '../Person.js'

describe('a person', () => {
    let person
    beforeEach(() => {
        person = new Person("Bobby", "Hill", "bigbobby@gmail.com")
    })
    it('has a first name', () => {
        expect(person._firstName).toEqual("Bobby")
    })

    it('has a last name', () => {
        expect(person._lastName).toEqual("Hill")
    })

    it('has an email address', () => {
        expect(person._email).toEqual("bigbobby@gmail.com")
    })
})