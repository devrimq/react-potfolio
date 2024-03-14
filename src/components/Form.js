import "./FormStyles.css";

import React from "react";

const Form = () => {
  return <div className="form">
    <form>
    <label>Adınız</label>
      <input type ="text"></input>
      <label>E-Posta</label>
      <input type ="email"></input>
      <label>Konu</label>
      <input type ="text"></input>
      <label>Messajınız</label>
      <textarea rows ="6" placeholder="Mesajınızı buraya yazabilirsiniz" />
      <button className="btn">Gönder</button>    


    </form>   

  </div>;
};

export default Form;
