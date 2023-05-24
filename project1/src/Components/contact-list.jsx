import React from "react";

import Card from "./Contact-card.jsx"

const ContactList=(props)=>{
    

    const RenderContacts=props.contacts.map((contact)=>{
        return(
         <Card contact={contact} />
        )
    })
    return(
        <div className="ui celled list">
            {RenderContacts}
        </div>
    )
}
export default ContactList