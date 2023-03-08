import React, { useState } from 'react';
import nfts from "../../assets/624c8c6d91d58f79a0e4d49b.jpg";


function Modal({ nft }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="nft-card" onClick={handleClick}>
      <h3>NFT Description: {nft.description}</h3>
      <p>Owner's Address: {nft.owner}</p>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>NFT Details</h2>
            <p>Description: {nft.description}</p>
            <p>Owner's Address: {nft.owner}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Modal;

export default function App() {
  return (
    <div>
      {nfts.map(nft => <Modal nft={nft} key={nft.owner} />)}
    </div>
  );
}

