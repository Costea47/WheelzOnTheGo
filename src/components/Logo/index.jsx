import React from "react";
import "./style.css";
import Logos from '../../assets/images/logo_1.png';

function Logo() {
  return (
    <div className="">
<img className="logoImage"src={Logos} alt="React Logo" />
{/* <p className="wording">Connecting you with your car</p> */}
      
    </div>
  );
}

export default Logo;
