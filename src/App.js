import logo from "./logo.svg";
import React, { useState,useEffect} from "react";
import emailjs from "@emailjs/browser";

import "./App.css";

function App() {
  const [first, setfirst] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
    width:"1000"
  });

useEffect(async () => {
  function reSize(){
    let wid = window.innerWidth;
    setfirst({...first,width:wid})
  
   }
   window.addEventListener("resize",reSize)
  

}, [])



  

  const clickHandler = async (e) => {
    e.preventDefault();
    let obj = {};
   
    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].value !== "") {
        obj[e.target[i].name] = e.target[i].value;
        setfirst(obj);
       
      
         if(i + 1 === e.target.length - 1){
          emailJS(e);
           alert("Success...!Your Message is Submitted to Sandesh")

         }
      } else {
        alert(`${e.target[i].name} cannot be Empty`);
        break;
      }
      
    }
   
  };

  const emailJS = (e) => {
    emailjs
    .sendForm(
      "service_6oj3tf7",
      "template_2jr0pnm",
      e.target,
      "user_ZPmjUFgcaXqApHlnGd3jg"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

  }
  
  return (

    <div className="main" style={first.width < 800? {width:"100%"}:{}} >
      <div className="App" style={first.width < 800? {width:"100%"}:{}} >
        <h2 className="h1-title">
          This Form is used to Contact Sandesh Kandukuri
        </h2>
        <form onSubmit={(e) => clickHandler(e)}>
          <div className="div-item">
            <label htmlFor="subject">your Name</label>
            <input type="text" className="name" id="name" name="name" />
          </div>
          <div className="div-item">
            <label htmlFor="email">your Email-ID:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="div-item">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              className="subject"
              id="subject"
              name="subject"
            />
          </div>

          <div className="div-item">
            <label htmlFor="message"> Message:</label>
            <textarea type="text" id="message" rows={10} name="message" />
          </div>
          <button style={{ marginTop: "50px" }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
