import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm(props) {
   const [messageSent, setMessageSent] = useState(false);
   const [isFilled, setisFilled] = useState({
      name: false,
      email: false,
      message: false,
   });

   function sendEmail(e) {
      e.preventDefault();
      emailjs
         .sendForm(
            "service_uxf9k9t",
            "template_9najqho",
            e.target,
            "user_F2z1Oy9s2pnH2gQ7BHGid"
         )
         .then(
            result => {
               console.log(result.text);
               setMessageSent(true);
               setTimeout(() => {
                  setMessageSent(false);
                  setisFilled({
                     name: false,
                     email: false,
                     message: false,
                  });
               }, 3000);
            },
            error => {
               console.log(error.text);
            }
         );
      e.target.reset();
   }

   function filled(e) {
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const messageField = document.getElementById("message");

      if (nameField.value.length !== 0) {
         setisFilled({
            name: true,
            email: false,
            message: false,
         });
      }

      if (emailField.value.length !== 0) {
         setisFilled({
            name: false,
            email: true,
            message: false,
         });
      }

      if (messageField.value.length !== 0) {
         setisFilled({
            name: false,
            email: false,
            message: true,
         });
      }

      if (nameField.value.length !== 0 && emailField.value.length !== 0) {
         setisFilled({
            name: true,
            email: true,
            message: false,
         });
      }

      if (nameField.value.length !== 0 && messageField.value.length !== 0) {
         setisFilled({
            name: true,
            email: false,
            message: true,
         });
      }

      if (emailField.value.length !== 0 && messageField.value.length !== 0) {
         setisFilled({
            name: false,
            email: true,
            message: true,
         });
      }

      if (
         nameField.value.length !== 0 &&
         emailField.value.length !== 0 &&
         messageField.value.length !== 0
      ) {
         setisFilled({
            name: true,
            email: true,
            message: true,
         });
      }

      if (
         nameField.value.length === 0 &&
         emailField.value.length === 0 &&
         messageField.value.length === 0
      ) {
         setisFilled({
            name: false,
            email: false,
            message: false,
         });
      }
   }

   return (
      <div className="contact-page">
         <h1 className="contact-page-h1">Send me a message or leave a review!</h1>
         <div
            className="contact"
            style={{
               background: props.theme === "dark" ? "#212529" : "#F8F9FA",
            }}
         >
            {messageSent ? (
               <div className="alert animated fadeInUp">
                  Your message has been sent
               </div>
            ) : (
               ""
            )}
            <form className="contact-form" onSubmit={sendEmail}>
               <label htmlFor="name" style={{color: props.theme === "dark" ? "#cb90e4" : "purple" }}>
                  Name{" "}
                  <span
                     className={isFilled.name === true ? "filled" : "required"}
                  >
                     <FontAwesomeIcon icon={faCircle} />
                  </span>
               </label>
               <input 
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  id="name"
                  autoFocus
                  onChange={filled}
                  required
               />

               <label htmlFor="email" style={{color: props.theme === "dark" ? "#cb90e4" : "purple" }}>
                  Email{" "}
                  <span
                     className={isFilled.email === true ? "filled" : "required"}
                  >
                     <FontAwesomeIcon icon={faCircle} />
                  </span>
               </label>
               <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  id="email"
                  onChange={filled}
                  required
               />

               <label htmlFor="message" style={{color: props.theme === "dark" ? "#cb90e4" : "purple" }}>
                  Message{" "}
                  <span
                     className={
                        isFilled.message === true ? "filled" : "required"
                     }
                  >
                     <FontAwesomeIcon icon={faCircle} />
                  </span>
               </label>
               <textarea
                  name="message"
                  placeholder="Your message..."
                  id="message"
                  onChange={filled}
                  required
               />

               <input type="submit" value="Send" />
            </form>
         </div>
      </div>
   );
}
