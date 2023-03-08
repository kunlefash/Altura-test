import React, { useState } from 'react';


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



