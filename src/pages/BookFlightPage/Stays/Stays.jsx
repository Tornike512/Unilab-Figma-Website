import "./Stays.scss";

export default function Stays() {
  return (
    <section className="stays-section">
      <ul className="stays-main-filter-grid">
        <li>
          <img src="" alt="Dropdown Icon" />
          <img src="" alt="Plus Icon" />
        </li>
        <li>
          <input type="date" />
        </li>
        <li>
          <img src="" alt="Dropdown Icon" />
          <img src="" alt="Plus Icon" />
        </li>
        <button>Search</button>
      </ul>
      <div className="stays-grid">
        <aside className="stays-filter-container">
          <p>Filter by:</p>
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
        <div className="properties"></div>
      </div>
    </section>
  );
}
