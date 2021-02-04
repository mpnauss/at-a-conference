import { iteratee } from 'lodash'
import Conference from '../Conference.js'
import Person from '../Person.js'
import Session from '../Session.js'

describe('a conference', () => {
    let conference
    let person
    let session
    let anotherPerson
    
    beforeEach(() => {
        conference = new Conference('Sakura Con', 200)
        person = new Person('John', 'Doe', 'johnny5@gmail.com')
        session = new Session('Session Name', person)
        anotherPerson = new Person('Lorelai', 'Gilmore', 'lorelaig@gamil.com')
    })
    
    //test for name
    it('initializes with a name', () => {
        expect(conference._name).toBe('Sakura Con')
    }) 

    //test for max registrants
    it('initializes with a maximum number of registrants', () => {
        expect(conference._maxRegistrants).toEqual(200)
    })

    //test for attendees
    it('initializes with a blank list of attendees', () => {
        expect(conference).toHaveProperty('attendees', [])
    })

    //test for sessions
    it('initializes with a blank list of sessions', () => {
        expect(conference).toHaveProperty('sessions', [])
    })

    describe('#register', () => { 
        
        //test to register attendee
        it('can register an attendee', () => {
            conference.register(person)
            expect(conference.attendees.length).toEqual(1)
        })
    
        //test that attendee is registered
        it('returns true when a person is successfully registered', () => {
            expect(conference.register(person)).toEqual(true)
        })
    
        //test that attendee cannot be registered more than once
        it('does not register the same email address more than once', () => {
            conference.register(person)
            // expect(conference.attendees.length).toEqual(1)
            
            conference.register(person)
            expect(conference.attendees.length).toEqual(1)
            expect(conference.register(person)).toEqual(false)
        })

        it('will not register more than the maximum number of attendees', () => {
            conference._maxRegistrants = 1
            conference.register(person)
            expect(conference.register(anotherPerson)).toEqual(false)
        })
    })

    describe('#addSession', () => {
        //test to add a session
        it('#can add a session to the list', () => {
            conference.addSession(session)
            expect(conference.sessions.length).toEqual(1)
        })
    })

    describe('#printSummary', () => {
        //test to print summary
        it.only("#can print a conference summary", () => {
            conference.addSession(session)
            expect(conference.printSummary()).toEqual('Sakura Con\n1\nSession Name, facilitated by John Doe\nRegistration is open')
        })
    })
    
})
