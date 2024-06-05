import React from "react";

export default function Apartments() {
  return (
    <section className="apartment-section">
      <aside className="apartment-info">
        <li className="checkout-info">
          <h2>Searched by:</h2>
          <ul>
            <label>Destination</label>
            <input placeholder="Auckland, New Zealand" />
          </ul>
          <ul>
            <label>Check-in date</label>
            <input placeholder="Thursday, February 1, 2024" />
          </ul>
          <ul>
            <label>Check-out date</label>
            <input placeholder="Friday, February 9, 2024" />
          </ul>
          <ul>
            <label>Persons</label>
            <input placeholder="2 Adults, 0 children, 1 room" />
            <label>Total 8 days</label>
          </ul>
        </li>
        <img src="" alt="Apartament On Map" />
        <li className="facilities">
          <h4>All the facilities:</h4>
          <ul>Private pool</ul>
          <ul>Terrace</ul>
          <ul>Kitchen</ul>
          <ul>1 Bedroom</ul>
          <ul>2 Bathrooms</ul>
          <ul>kids play space</ul>
          <ul>Billiard room</ul>
          <ul>Private gym</ul>
        </li>
      </aside>
      <div className="apartment"></div>
    </section>
  );
}
