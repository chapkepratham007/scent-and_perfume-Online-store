import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:chapkepratham@gmail.com">
        <Button>Contact: chapkepratham@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
