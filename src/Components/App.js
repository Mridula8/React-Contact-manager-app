import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retreiveContacts) setContacts(retreiveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="ui container">
      <Router>
      <Header />
      <Switch>
      <Route path="/" 
      exact 
      render={(props) => (
        <ContactList 
          {...props}
          contacts={contacts}
          getContactId = {removeContactHandler}
          />
          )}
      />
      <Route path="/add"
      render={(props) => (
        <AddContact 
          {...props} 
          addContactHandler={addContactHandler}
          />
          )}
      />
      <Route path="/contact/:id" component={ContactDetail} />
      {/* <Route path="/delete/:id" component={DeleteContact} /> */}
      </Switch> 
      </Router>
    </div>
    
  );
}

export default App;
