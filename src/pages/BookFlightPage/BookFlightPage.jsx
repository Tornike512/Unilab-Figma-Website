import dropDownIcon from "/src/assets/dropdown-icon.png";
import plusIcon from "/src/assets/plus-icon.png";
import closeIcon from "/src/assets/close-icon.png";
import calendarIcon from "/src/assets/calendar-icon.png";

import "./BookFlightPage.scss";

export function BookFlightPage() {
  return (
    <section className="book-flight-page">
      <div className="book-flight">
        <div className="book-flight-container">
          <ul className="main-filter">
            <button>Flights</button>
            <li>Stays</li>
            <li>Car rentals</li>
            <li>Cruises</li>
            <li>Attractions</li>
          </ul>
        </div>
        <div className="additional-filter-grid">
          <ul className="additional-filter-item">
            <li>One-way</li>
            <img src={dropDownIcon} alt="Dropdown Icon" />
          </ul>
          <ul className="additional-filter-item">
            <li>1 Adult</li>
            <img src={dropDownIcon} alt="Dropdown Icon" />
          </ul>
          <ul className="additional-filter-item">
            <li>Economy</li>
            <img src={dropDownIcon} alt="Dropdown Icon" />
          </ul>
        </div>
        <form className="filter-by-location-grid">
          <ul className="filter-by-start">
            <li className="start-city">
              <li>from</li>
              <p>Tbilisi</p>
              <img src={closeIcon} alt="Close Button" />
            </li>
            <li className="add-city">
              <img src={plusIcon} alt="Plus Icon" />
            </li>
          </ul>
          <ul className="filter-by-finish">
            <li className="finish-city">
              <li>to</li>
              <p>Paris</p>
            </li>
            <li className="add-finish-city">
              <img src={dropDownIcon} alt="Dropdown Icon" />
            </li>
          </ul>
          <ul className="filter-by-calendar">
            <li className="calendar-wrapper">
              <input type="date" />
            </li>
            <img src={plusIcon} alt="Plus Icon" />
          </ul>
          <button className="search-button">Search</button>
        </form>
        <div className="flights">
          <aside className="filter-flights">
            <ul className="filter-by-rating">
              <li>Cheapest</li>
              <li>Quickest</li>
              <li>Best</li>
            </ul>
            <div className="detailed-filter">
              <ul className="stops-filter">
                <li>Stops</li>
                <img src="" alt="Dropup ICON" />
              </ul>
              <ul className="direct">
                <input type="checkbox" />
                <li>Direct</li>
              </ul>
              <ul className="one-stop">
                <input type="checkbox" />
                <li>One stop</li>
              </ul>
              <ul className="two-stops">
                <input type="checkbox" />
                <li>Two stops</li>
              </ul>
              <ul className="filter-by-times">
                <li>Times</li>
                <img src="" alt="Dropup icon" />
              </ul>
              <ul className="take-off-start">
                <li>Take off - Tbilisi</li>
                <div className="take-off-time">
                  <li>12:00</li>
                  <li>24:00</li>
                </div>
                <input type="range" />
              </ul>
              <ul className="take-off-finish">
                <li>Take off - Paris</li>
                <div className="take-off-time">
                  <li>12:00</li>
                  <li>24:00</li>
                </div>
                <input type="range" />
              </ul>
              <ul className="airlines">
                <li>Airlines</li>
                <img src="" alt="dropdown Icon" />
              </ul>
              <ul className="airports">
                <li>Airports</li>
                <img src="" alt="dropdown Icon" />
              </ul>
              <div className="duration">
                <ul className="duration-dropup">
                  <li>Duration</li>
                  <img src="" alt="dropup Icon" />
                </ul>
                <ul className="duration-range">
                  <li>7 Hours</li>
                  <li>30 Hours</li>
                </ul>
                <input type="range" />
              </div>
              <div className="price">
                <ul className="duration-dropup">
                  <li>Price</li>
                  <img src="" alt="dropup Icon" />
                </ul>
                <ul className="duration-range">
                  <li>700$</li>
                  <li>3000$</li>
                </ul>
                <input type="range" />
              </div>
              <div className="price-calculator">
                <ul className="payment-method">
                  <img src="" alt="Card Logo" />
                  <li>Payment method</li>
                </ul>
                <input type="text" placeholder="Choose payment method" />
                <ul className="select-bags">
                  <img src="" alt="Bag Icon" />
                  <li>Carry-on bag</li>
                </ul>
                <input type="text" placeholder="Select bags (0)" />
                <ul className="checked-bag">
                  <img src="" alt="Case Icon" />
                  <li>Checked bag</li>
                </ul>
                <input type="text" placeholder="Select bags (0)" />
              </div>
            </div>
          </aside>
          <div className="flight-container">
            <div className="flight-details">
              <ul className="airlines-company">
                <img src="" alt="Airlines Company Logo" />
                <li>Georgian Airlines</li>
              </ul>
              <div className="flight-take-off">
                <ul className="take-off-landing">
                  <li>Take off</li>
                  <li>Landing</li>
                </ul>
                <ul className="take-off-time">
                  <li>12:00</li>
                  <li>19:00</li>
                </ul>
                <img src="" alt="Landing Image" />
              </div>
              <p>7 Hours</p>
              <div className="flight-deal">
                <ul className="flight-price">
                  <li>Price</li>
                  <li>600$</li>
                </ul>
                <button className="view-deal-button">View Deal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
