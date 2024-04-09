import properties from "./property.json";

import dropDownIcon from "/src/assets/dropdown-icon.png";
import plusIcon from "/src/assets/plus-icon.png";
import propertyImage from "/src/assets/property-image.png";
import fiveStars from "/src/assets/five-stars.png";

import "./Stays.scss";

export default function Stays() {
  return (
    <section className="stays-section">
      <ul className="stays-main-filter-grid">
        <li>
          <span>
            Choose city
            <img
              className="dropdown-icon"
              src={dropDownIcon}
              alt="Dropdown Icon"
            />
          </span>
          <img src={plusIcon} alt="Plus Icon" />
        </li>
        <li className="stays-calendar">
          <div className="calendar-wrapper">
            <input type="date" />
          </div>
          <img src={plusIcon} alt="Plus Icon" />
        </li>
        <li>
          <span>
            2 Adults
            <img
              className="dropdown-icon"
              src={dropDownIcon}
              alt="Dropdown Icon"
            />
          </span>
          <img src={plusIcon} alt="Plus Icon" />
        </li>
        <button className="search-button">Search</button>
      </ul>
      <div className="stays-grid">
        <aside className="stays-filter-container">
          <p className="filter-by-text">Filter by:</p>
          <ul className="property-type">
            <h3>Propety type</h3>
            <li>
              <input type="checkbox" />
              <p>Hotel</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Apartment</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Villa</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Guest house</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Resort</p>
            </li>
            <nav>
              <a href="#">Show all 15</a>
            </nav>
          </ul>
          <ul className="propety-rating">
            <h3>Property rating</h3>
            <li>
              <input type="checkbox" />
              <p>5 Stars</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>4 Stars</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>3 Stars</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>2 Stars</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Unrated</p>
            </li>
          </ul>
          <ul className="facilities">
            <h3>Facilities</h3>
            <li>
              <input type="checkbox" />
              <p>Wifi</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Parking</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Pets allowed</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Fitness center</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Swimming pool</p>
            </li>
            <nav>
              <a href="#">Show all 15</a>
            </nav>
          </ul>
          <ul className="room-facilities">
            <h3>Room facilities</h3>
            <li>
              <input type="checkbox" />
              <p>Balcony</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>TV</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Kitchen</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Air conditioning</p>
            </li>
            <li>
              <input type="checkbox" />
              <p>Washing machine</p>
            </li>
            <nav>
              <a href="#">Show all 15</a>
            </nav>
          </ul>
        </aside>
        <div className="properties">
          <h2 className="found-properties">
            Auckland, New Zealand: 2000 properties found
          </h2>
          <select className="sort-properties">
            <option value="popular">Sort by: popular</option>
            <option value="lowest-price">Sort by: lowest price</option>
            <option value="highest-price">Sort by: highest price</option>
            <option value="top-rated">Sort by: top rated</option>
          </select>
          {properties.map((property) => {
            return (
              <div className="property-container">
                <img
                  className="property-image"
                  src={property.image}
                  alt="Property Image"
                />
                <div className="property-info">
                  <div className="location-details">
                    <ul className="property-location">
                      <h2>{property.title}</h2>
                      <li>{property.location}</li>
                      <li>{property.from_center}</li>
                      <li>{property.description}</li>
                    </ul>
                    <ul className="property-details">
                      <li>Rating:</li>
                      <img src={fiveStars} alt="Property Rating By Stars" />
                      <li>Price:</li>
                      <li className="price">{`${property.price}$`}</li>
                    </ul>
                  </div>
                  <button className="show-details-button">Show details</button>
                </div>
              </div>
            );
          })}
          <button className="show-more-results">Show more results</button>
        </div>
      </div>
    </section>
  );
}
