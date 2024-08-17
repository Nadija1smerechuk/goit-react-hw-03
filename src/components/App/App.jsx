import { useState } from 'react'
import './App.css'
import Contact from '../Contact/Contact';
import ContactList  from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

export default function App() {

  const initialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

  const [contacts, setContacts] = useState(initialState);

  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );



  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox />
      <ContactList contacts={contacts} />
      
    </>
  )
}

