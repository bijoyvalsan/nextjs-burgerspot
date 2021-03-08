import React from "react";
import { Card } from "./../components";

const Contact = () => {
  return <><Card>
    <div className="contact_us">
      <h1>CONTACT</h1>
      <div style={{ display: "flex" }}>
        <div style={{ paddingRight: "25px" }}>
          <p> <b>Burger Spot Private Limited </b></p>
          <p>  24/61 Cochin university road </p>
          <p>  South kalamassery </p>
          <p>  Ernakulam </p>
          <p>  Kerala 682022 </p>
        </div>
        <div style={{ paddingRight: "25px" }}>
          <span>
            <p> Mobile: <b>9207421111</b></p>
          </span>

          <span>
            <p> Email: <b>info@burgerspot.in</b></p>
          </span>

        </div>

      </div>
    </div>
  </Card></>
}

export default Contact;
