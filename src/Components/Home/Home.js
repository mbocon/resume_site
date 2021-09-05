import "./Home.css";
import { FaInfoCircle, FaHorse, FaStar } from 'react-icons/fa';

export default function Home() {
   return (
      <div className="home">
         <div className="home-first">
            <div className="home-img-1"></div>
            <div className="home-content">
               <h1><small className="info"><FaInfoCircle /></small> About</h1>
               <p>
                    My name is Mary Klein. I graduated from Mission Farrier School and I'm currently working towards AFA CF
               </p>
            </div>
         </div>
         <div className="home-second">
            <div className="home-img-2"></div>
            <div className="home-content">
               <h1><small className="info"><FaStar /></small> Professional Farrier</h1>
               <p>
                Servicing the Hawaiian Islands, specifically Maui. 
               </p>
            </div>
         </div>
         <div className="home-third">
            <div className="home-img-3"></div>
            <div className="home-content">
               <h1><small className="info"><FaHorse /></small> Mobile Service</h1>
               <p>
                    Delivering a professional and reliable mobile farrier service dedicated to excellence in quality and craftsmanship.
               </p>
            </div>
         </div>
      </div>
   );
}
