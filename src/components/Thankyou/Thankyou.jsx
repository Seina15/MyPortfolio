import React from "react";
import "./Thankyou.css";
import flower from "./flowe.png"; // 別途アップロードしてね

const ThankYou = () => {
  return (
    <div className="thank-container">
        <h1 className="thank-text">Thank you for coming!</h1>

        <svg className="thank-line" viewBox="0 0 2000 100" preserveAspectRatio="none">
            <path d="M10,70 Q1000,40 1990,70" className="line-path" />
        </svg>


      <img src={flower} alt="flower" className="flower-image" />
    </div>
  );
};

export default ThankYou;
