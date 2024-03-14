import React from "react";
import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

const PricingCard = () => {
  return <div className="pricing">
    <div className="card-container">
       
        <div className="card" >
          <h3>Kupaterapi</h3> 
          <span className="bar"></span>
          <p className="btc">Hacamat</p>
          <p>3 seans</p>
          <p>Ayda 1</p>
          <p>Kupa terapi, geleneksel Çin tıbbına dayanan bir tedavi yöntemidir. Bu yöntemde, vücut üzerine vakum etkisi yaratan kapların yerleştirilmesiyle birlikte deri altındaki kan ve enerji dolaşımı teşvik edilir. Bu uygulama genellikle ağrıları azaltmak, dolaşımı iyileştirmek ve stresi azaltmak için kullanılır. Ancak, yan etkileri ve kontrendikasyonları olduğu için uzman gözetiminde yapılması önemlidir.</p>
          <p>responsiv </p>
          <Link to="/contact"className="btn" >
          incele şimdi al
          </Link>

        </div>
        <div className="card" >
          <h3>PRP</h3> 
          <span className="bar"></span>
          <p className="btc">fyatı  1 tl</p>
          <p>3 seana</p>
          <p>3 ay</p>
          <p>öne çıkan </p>
          <p>responsiv </p>
          <Link to="/contact"className="btn" >
          incele şimdi al
          </Link>

        </div>
        <div className="card" >
          <h3>akupunktur</h3> 
          <span className="bar"></span>
          <p className="btc">fyatı  1 tl</p>
          <p>10 gün</p>
          <p>3 sayfa</p>
          <p>öne çıkan </p>
          <p>responsiv </p>
          <Link to="/contact"className="btn" >
          incele şimdi al
          </Link>

        </div>
    </div>
  
   </div>;
};

export default PricingCard;
