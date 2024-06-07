import mapImage from "/src/assets/map-image.png";

import "./Apartments.scss";

export default function Apartments() {
  return (
    <section className="apartment-section">
      <aside className="apartment-info">
        <ul className="checkout-info">
          <h2>Searched by:</h2>
          <li>
            <label>Destination</label>
            <input placeholder="Auckland, New Zealand" />
          </li>
          <li>
            <label>Check-in date</label>
            <input placeholder="Thursday, February 1, 2024" />
          </li>
          <li>
            <label>Check-out date</label>
            <input placeholder="Friday, February 9, 2024" />
          </li>
          <li>
            <label>Persons</label>
            <input placeholder="2 Adults, 0 children, 1 room" />
            <label>Total 8 days</label>
          </li>
        </ul>
        <img src={mapImage} alt="Apartment On Map" />
        <ul className="facilities">
          <h4>All the facilities:</h4>
          <li>Private pool</li>
          <li>Terrace</li>
          <li>Kitchen</li>
          <li>1 Bedroom</li>
          <li>2 Bathrooms</li>
          <li>kids play space</li>
          <li>Billiard room</li>
          <li>Private gym</li>
        </ul>
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
