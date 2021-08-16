import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';
// import DeleteContact from './DeleteContact';

const ContactList = (props) => {
    console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard 
            contact={contact} 
            clickHandler={deleteContactHandler} 
            key={contact.id}
            />
        );
    });
    
        //     <div>
        //     <ContactCard
        //     contact={contact}
        //     clickHandler={deleteContactHandler}
        //     key={contact.id}
        //      />
        //     <DeleteContact
        //     contact={contact}
        //     clickHandler={deleteContactHandler}
        //      />
        // </div> 

    return (
        <div className="main">
            <h2>random</h2>
            <h2>Contact List
                <Link to="/add">
                <button className="ui button blue right">Add contact</button>
                </Link>
            </h2>  
        <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;