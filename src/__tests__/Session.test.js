import { iteratee } from 'lodash'
import Session from '../Session.js'
import Person from '../Person.js'

describe('a session', () => {
    let session
    let person
    beforeEach(() => {
        person = new Person('Marie', 'Curie', 'mariec@gmail.com')
        session = new Session('a session title', person, 900, 1200 )
    })
    it('has a title', () => {
        expect(session._title).toEqual('a session title')
    })
    it('has a facilitator', () => {
        expect(session._facilitator).toEqual(person)
    })
    it('has a start time', () => {
        expect(session._startTime).toEqual(900)
    })
    it('has an end time', () => {
        expect(session._endTime).toEqual(1200)
    })
})