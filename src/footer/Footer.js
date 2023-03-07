import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <table>
        <tr>
          <th>Marketplace</th>
        </tr>
        <tr>
          <td>NFTs</td>
        </tr>
        <tr>
          <td>MetaVerse</td>
        </tr>
        <tr>
          <td>Polygon</td>
          <td>FAQs</td>
          <td>Web3</td>
        </tr>
        <tr>
          <td>Contact</td>
        </tr>
      </table>
      <button className="chatfooter-btn">Chat with us</button>
    </footer>
  );
}

export default Footer;
