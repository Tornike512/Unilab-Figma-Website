import properties from "/src/pages/BookFlightPage/Stays/property.json";

import mapImage from "/src/assets/map-image.png";
import locationIcon from "/src/assets/location-logo.png";
import fiveStars from "/src/assets/five-stars.png";
import fourStars from "/src/assets/four-stars.png";
import threeStars from "/src/assets/three-stars.png";
import twoStars from "/src/assets/two-stars.png";
import oneStar from "/src/assets/one-star.png";
import shareIcon from "/src/assets/share-icon.png";
import heartIcon from "/src/assets/heart-icon.png";
import hotelImage from "/src/assets/hotel-image.png";

import "./Apartments.scss";

export default function Apartments({ title }) {
  const filterByTitle = properties.filter((property) => {
    return property.title === title;
  });

  const handleRatingStars = (property) => {
    if (property === 5) {
      return fiveStars;
    } else if (property === 4) {
      return fourStars;
    } else if (property === 3) {
      return threeStars;
    } else if (property === 2) {
      return twoStars;
    } else if (property === 1) {
      return oneStar;
    }
  };

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
      {filterByTitle.map((property) => {
        console.log(property.rating);
        return (
          <div key={property.title} className="apartment">
            <div className="apartment-title">
              <h2>{property.title}</h2>
              <p>Rating:</p>
            </div>
            <ul className="apartment-address">
              <li className="address">
                <img src={locationIcon} alt="Location Icon" />
                54 Street, Auckland, New Zealand
              </li>
              <li className="rating">
                <img src={heartIcon} alt="Heart Icon" />
                <img src={shareIcon} alt="Share Icon" />
                <img
                  src={handleRatingStars(property.rating)}
                  alt="Rating Stars"
                />
              </li>
            </ul>
            <div className="apartment-grid">
              <img src={property.image} alt="Apartment Photo" />
              <div className="apartment-wrapper">
                <img src={property.image} alt="Apartment Photo" />
                <img src={property.image} alt="Apartment Photo" />
              </div>
            </div>
            <div className="apartment-more-images-grid">
              <img src={property.image} alt="Apartment Photo" />
              <img src={property.image} alt="Apartment Photo" />
              <img src={property.image} alt="Apartment Photo" />
              <div className="plus-15-images">
                <img src={property.image} alt="Plus 15 Apartment Photos" />
                <p>+ 15 Photos</p>
              </div>
            </div>
            <div className="book-now">
              <button className="price-button">
                Price: {property.price}${" "}
              </button>
              <button className="total-price-button">Total price: 3200$</button>
              <button className="book-now-button">Book now</button>
            </div>
            <p className="apartment-description">{property.description}</p>
            <a className="show-more">Show more</a>
          </div>
        );
      })}
    </section>
  );
}
