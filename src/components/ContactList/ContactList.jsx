import Contact from "../Contact/Contact";

export default function ContactList({ contacts }) {
    return (
        <div>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </div>
    )
}