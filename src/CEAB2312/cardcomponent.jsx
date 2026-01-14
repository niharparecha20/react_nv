import React ,{ Component } from "react";
import "./card.css";
class CardComponent extends Component {
    render() {
        return (
          <>
            <div className="user-card">
               <img src="https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg"></img>
               <button>Follow</button>
               <p>This is a Paragraph.</p>
               </div>     
         </>   
        )   
   }
}
export default CardComponent;