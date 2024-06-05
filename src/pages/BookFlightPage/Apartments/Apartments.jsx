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
        <img src="" alt="Apartment On Map" />
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
      <div className="apartment">
        <div className="apartment-title">
          <h2>New Zealand Resort</h2>
          <p>Rating:</p>
        </div>
        <ul className="apartment-address">
          <li className="address">
            <img src="" alt="Location Icon" />
            54 Street, Auckland, New Zealand
          </li>
          <li className="rating">
            <img src="" alt="Heart Icon" />
            <img src="" alt="Share Icon" />
            <img src="" alt="Rating Stars" />
          </li>
        </ul>
        <div className="apartment-grid">
          <img src="" alt="Apartment Photo" />
          <img src="" alt="Apartment Photo" />
          <img src="" alt="Apartment Photo" />
        </div>
        <div className="apartment-more-images-grid">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <div>
            <img src="" alt="" />
            <p>+ 15 Photos</p>
          </div>
        </div>
        <div className="book-now">
          <button className="price-button">Price: 400$ </button>
          <button className="total-price-button">Total price: 3200$</button>
          <button className="book-now-button">Book now</button>
        </div>
        <p className="apartment-description">
          Near beach, with private beach area and private pool. Property has
          terrace, kitchen, 1 master bedroom, 2 bathrooms, living room,
          backyard, kids play space and private billiard room, where refined
          leisure and competitive spirit converge seamlessly. Experience a
          retreat like no other, where every corner exudes elegance, making your
          stay a harmonious blend of indulgence and relaxation.
        </p>
      </div>
    </section>
  );
}
