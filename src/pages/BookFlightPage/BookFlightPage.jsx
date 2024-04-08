import "./BookFlightPage.scss";

export function BookFlightPage() {
  return (
    <section className="book-flight">
      <div className="book-flight-container">
        <div className="filter-buttons-grid">
          <button className="filter-button">Flights</button>
          <button className="filter-button">Stays</button>
          <button className="filter-button">Car rentals</button>
          <button className="filter-button">Cruises</button>
          <button className="filter-button">Attractions</button>
        </div>
      </div>
      <div className="additional-filter-grid">
        <div className="additional-filter-item">
          <span>One-way</span>
          <img src="" alt="Dropdown Icon" />
        </div>
        <div className="additional-filter-item">
          <span>1 Adult</span>
          <img src="" alt="Dropdown Icon" />
        </div>
        <div className="additional-filter-item">
          <span>Economy</span>
          <img src="" alt="Dropdown Icon" />
        </div>
      </div>
      <div className="filter-by-location-grid">
        <button className="filter-by-start"></button>
        <button className="filter-by-finish"></button>
        <button className="filter-by-calendar"></button>
        <button className="search-button"></button>
      </div>
      <div className="flights">
        <aside className="filter-flights">
          <div className="filter-by-rating">
            <h3>Cheapest</h3>
            <h3>Quickest</h3>
            <h3>Best</h3>
          </div>
          <div className="detailed-filter">
            <span className="stops-filter">
              <h4>Stops</h4>
              <img src="" alt="Dropup ICON" />
            </span>
            <div className="direct">
              <input type="checkbox" />
              <span>Direct</span>
            </div>
            <div className="one-stop">
              <input type="checkbox" />
              <span>One stop</span>
            </div>
            <div className="two-stops">
              <input type="checkbox" />
              <span>Two stops</span>
            </div>
            <div className="filter-by-times">
              <span>Times</span>
              <img src="" alt="Dropup icon" />
            </div>
            <div className="take-off-start">
              <span>Take off - Tbilisi</span>
              <div className="take-off-time">
                <span>12:00</span>
                <span>24:00</span>
              </div>
              <input type="range" />
            </div>
            <div className="take-off-finish">
              <span>Take off - Paris</span>
              <div className="take-off-time">
                <span>12:00</span>
                <span>24:00</span>
              </div>
              <input type="range" />
            </div>
            <div className="airlines">
              <span>Airlines</span>
              <img src="" alt="dropdown Icon" />
            </div>
            <div className="airports">
              <span>Airports</span>
              <img src="" alt="dropdown Icon" />
            </div>
            <div className="duration">
              <div className="duration-dropup">
                <span>Duration</span>
                <img src="" alt="dropup Icon" />
              </div>
              <div className="duration-range">
                <span>7 Hours</span>
                <span>30 Hours</span>
              </div>
              <input type="range" />
            </div>
            <div className="price">
              <div className="duration-dropup">
                <span>Price</span>
                <img src="" alt="dropup Icon" />
              </div>
              <div className="duration-range">
                <span>700$</span>
                <span>3000$</span>
              </div>
              <input type="range" />
            </div>
            <div className="price-calculator">
              <label className="payment-method">
                <img src="" alt="Card Logo" />
                <span>Payment method</span>
              </label>
              <input type="text" placeholder="Choose payment method" />
              <label className="select-bags">
                <img src="" alt="Bag Icon" />
                <span>Carry-on bag</span>
              </label>
              <input type="text" placeholder="Select bags (0)" />
              <label className="checked-bag">
                <img src="" alt="Case Icon" />
                <span>Checked bag</span>
              </label>
              <input type="text" placeholder="Select bags (0)" />
            </div>
          </div>
        </aside>
        <div className="flight-container">
          <div className="flight-details">
            <div className="airlines-company">
              <img src="" alt="Airlines Company Logo" />
              <h4>Georgian Airlines</h4>
            </div>
            <div className="flight-take-off">
              <div className="take-off-landing">
                <span>Take off</span>
                <span>Landing</span>
              </div>
              <div className="take-off-time">
                <span>12:00</span>
                <span>19:00</span>
              </div>
              <img src="" alt="Landing Image" />
            </div>
            <p>7 Hours</p>
            <div className="flight-deal">
              <span className="flight-price">
                <p>Price</p>
                <p>600$</p>
              </span>
              <button className="view-deal-button">View Deal</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
