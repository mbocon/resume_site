import { useState } from "react";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ContactForm from "./Components/ContactForm/ContactForm";
import { Route, Switch } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
   
  function toggleTheme(e) {
     e.preventDefault();

     if (theme === "dark") {
        setTheme("light");
        
     } else {
        setTheme("dark");
     }
  }

   return (
      <div className="App">
         <header className="header">
            <NavBar toggleTheme={toggleTheme} theme={theme} />
         </header>
         <main className="main">
            <Switch>
               <Route exact path="/" render={() => <Home /> } />
               <Route exact path="/contact" render={() => <ContactForm theme={theme} /> } />
            </Switch>
         </main>
         <footer className="footer">
            <Footer toggleTheme={toggleTheme}  theme={theme}/>
         </footer>
      </div>
   );
}

export default App;
