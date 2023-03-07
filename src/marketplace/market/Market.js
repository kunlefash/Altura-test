import React, { useState } from "react";
import { Link } from "react-router-dom";
import nft1 from "../../assets/624c8c6d91d58f79a0e4d49b.jpg";
import "./market.css";

export default function Market(props, { index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="market">
      <img src={props.img} className="nft-pic" alt="nftimages" />
      <div className="marketplaceinfo">
        <span className="nft-name">{props.name}</span>
        <div className="nft-amt">{props.number}</div>
        <div>
          <span className="nft-avail">{props.available}</span>
          <Link to="/details">
            <button className="viewdetails"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>View details</button>
          </Link>
          {isHovered && (
            <>
              <Market
                img={nft1}
                name="The Greenepoint Collection"
                number="250 Items"
                available="(250 Sold, 250 Available)"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
