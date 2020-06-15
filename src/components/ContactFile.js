import React from 'react';

//const contact = 

function ContactFile (props) {
    console.log(props)
        return ( 
            <div className='contactfile'>
                <img src={props.contact.imgUrl} />
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email:{props.contact.email}</p>
            </div>
         );
}
 
export default ContactFile;