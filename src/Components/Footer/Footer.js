import { Button } from "react-bootstrap";
import "./Footer.css";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { FiPhoneCall, FiSun, FiMoon } from "react-icons/fi";

export default function Footer(props) {
   return (
      <div
         className="footer-content"
         style={{ background: props.theme === "dark" ? "#212529" : "#F8F9FA" }}
      >
         <div className="footer-icons">
            <Button className="theme-btn" onClick={props.toggleTheme}>
               {props.theme === "dark" ? <FiSun /> : <FiMoon />}
            </Button>
            <a href="tel:808-870-4606">
               <FiPhoneCall />
            </a>
            <a
               href="https://www.facebook.com/mary.klein.9250"
               target="_blank"
               rel="noreferrer"
            >
               <FaFacebookSquare />
            </a>
            <a
               href="https://www.instagram.com/mkkbetterhoofit/"
               target="_blank"
               rel="noreferrer"
            >
               <FaInstagramSquare />
            </a>
         </div>
         <div className="footer-copy">
            <p className="footer-rights">
               All Rights Reserved &copy; {new Date().getFullYear()}
            </p>
         </div>
      </div>
   );
}
