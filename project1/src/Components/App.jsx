import React,{useState ,useEffect} from 'react'


import Header from './Header.jsx'
import AddContact from './Add-Contact.jsx'
import Contactlist from './contact-list.jsx'


function App() {

  const LOCAL_STORAGE_KEY="sda"
  
  const [contacts,setContact]=useState([]);
  
  const ContactHandler=(contact)=>{
    console.log(contact)
    setContact([...contacts,contact])
  }
  
  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("a"))

      setContact(data);
    
  },[])

  useEffect(()=>{
    
      localStorage.setItem("a",JSON.stringify(contacts))
    
  },[contacts])
  

 

  return (
   <>
   <div className="ui-container">
      <Header />
      <AddContact ContactHandler={ContactHandler}/>
      <Contactlist contacts={contacts} />
   </div>
   </>
  )
}

export default App
