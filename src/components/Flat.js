import React from "react";

const Flat = (props) => {

  const {imageUrl, name, price, priceCurrency, lng, lat} = props.flat


  const handleClick = (lat, lng) => {
    props.onClick(lat, lng);
  }

  return (
    <div className="card" onClick={() => handleClick(lat, lng)}>
      <div className="image">
        <img src={imageUrl} alt=""/>
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="extra content">
        <span>
        <i className={`${priceCurrency.toLowerCase()} sign icon`}></i>
        {price}
        </span>
      </div>
    </div>
  );
};

export default Flat;
