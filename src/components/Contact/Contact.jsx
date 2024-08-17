import css from './Contact.module.css';

export default function Contact({ contact }) {
    const { name, number } = contact;
    return (
      
    <div className={css.container}>
        <ul >
            <p>Name: {contact.name}</p>
            <p>Number: {contact.number}</p>
        </ul>
        <button className={css.button}>Delete</button>
    </div>
  );
}