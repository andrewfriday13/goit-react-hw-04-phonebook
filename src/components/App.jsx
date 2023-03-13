import { Component } from 'react';
import { ContactForm } from './contact/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import css from './app.module.css'

import { nanoid } from 'nanoid';


const objContacts=[
  {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
  {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
  {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
  {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'}
]

export class App extends Component{

  state = {
  contacts: [], 
    filter: '',
  }
  componentDidMount(){
  
    const localContact = localStorage.getItem('contacts')
    if(localContact !== null){
      const parseContact = JSON.parse(localContact)
      this.setState({contacts: parseContact})
      return
    }
    this.setState({contacts: objContacts})
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => {
    if (this.state.contacts.map(contact => contact.name).includes(name)) {
      return alert(`${name} is alredy in contacts.`);
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
console.log(number)
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  filterContact = event =>{
    const { name, value}  =event.currentTarget
    this.setState({
      [name]: value
    })
  }
  removeContact =(contactId)=>{
    this.setState(prevState => ({
      contacts:  prevState.contacts.filter(contact => contact.id !== contactId )
    }))
  }  

  render() {
    const {contacts, filter} = this.state
    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter 
        onChange={this.filterContact} 
        value={filter}/>
        <ContactList
        onRemove={this.removeContact}
        filter={filter}
         contacts={contacts} />
    </div>
  );}
};
