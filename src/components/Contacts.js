import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    id: 1,
                    name: "Phil",
                    email: "phil@email.com",
                    number: "555-555-5555"
                },
                {
                    id: 2,
                    name: "Amani",
                    email: "amani@email.com",
                    number: "554-555-5555"
                },
                {
                    id: 3,
                    name: "Phil2",
                    email: "phil2@email.com",
                    number: "553-555-5555"
                }
            ]
        }
    }

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {/* parentheses go where curly brackets usually go in higher order functions */}
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        name={contact.name}
                        email={contact.email}
                        number={contact.number} />
                ))}
            </React.Fragment>
        )
    }
}
export default Contacts;