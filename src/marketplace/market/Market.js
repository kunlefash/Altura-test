import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal"
import "./market.css";
import nfts from "../../assets/624c8c6d91d58f79a0e4d49b.jpg";

export default function Market(props, { index }) {
  return (
    <div className="market">
      <img src={props.img} className="nft-pic" alt="nftimages" />
      <div className="marketplaceinfo">
        <span className="nft-name">{props.name}</span>
        <div className="nft-amt">{props.number}</div>
        <div>
          <span className="nft-avail">{props.available}</span>
          <Link to="/details">
            <button className="viewdetails">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
   function App() {
    return (
      <div>
        {nfts.map(nft => <Modal nft={nft} key={nft.owner} />)}
      </div>
    );
  }
}
