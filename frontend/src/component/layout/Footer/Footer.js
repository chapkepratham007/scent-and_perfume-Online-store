import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>PRATHAM PERFUMES.</h1>
        <p>High Quality is our first priority</p>
        <p>Thank you for visiting pratham Perfumes</p>
        <p>Copyrights 2022 &copy; Prathamperfumes</p>
        
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/_c_h_a_p_k_e_">Instagram</a>
        <a href="https://youtube.com/channel/UC1Y5671CPLQRBDIAttrDGHA">Youtube</a>
        <a href="https://www.facebook.com/pratham.chapke.3/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
