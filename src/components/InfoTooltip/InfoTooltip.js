import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, onClose, infoProfileMessage }) {
  const openClass = isOpen && "popup_visible";

  return (
    <div className={`popup ${openClass}`}>
      <div className="popup__window">
        <button
          type="button"
          onClick={onClose}
          className="popup__close-button"
        ></button>
        <div className="popup__container">
          <p className="popup__info-text">{infoProfileMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
