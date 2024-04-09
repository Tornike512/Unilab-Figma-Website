import { useState } from "react";

import dropDownIcon from "/src/assets/dropdown-icon.png";
import plusIcon from "/src/assets/plus-icon.png";
import closeIcon from "/src/assets/close-icon.png";
import dropUp from "/src/assets/drop-up-icon.png";
import bagIcon from "/src/assets/bag-icon.png";
import cardIcon from "/src/assets/card-icon.png";
import caseIcon from "/src/assets/case-icon.png";
import georgianAirlinesLogo from "/src/assets/georgian-airlines-logo.png";
import oneLanding from "/src/assets/one-landing.png";
import twoLanding from "/src/assets/two-landing.png";
import noLanding from "/src/assets/no-landing.png";
import flights from "./flight.json";

import "./BookFlightPage.scss";

export function BookFlightPage() {
  const [showMore, setShowMore] = useState(10);
  const [hideShowMore, setHideShowMore] = useState(false);

  const handleLanding = (landing) => {
    if (landing === 0) {
      return noLanding;
    } else if (landing === 1) {
      return oneLanding;
    } else if (landing === 2) {
      return twoLanding;
    }
  };

  console.log(showMore);
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
            <span className="start-city">
              <li>from</li>
              <p>Tbilisi</p>
              <img src={closeIcon} alt="Close Button" />
            </span>
            <li className="add-city">
              <img src={plusIcon} alt="Plus Icon" />
            </li>
          </ul>
          <ul className="filter-by-finish">
            <span className="finish-city">
              <li>to</li>
              <p>Paris</p>
            </span>
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
                <img src={dropUp} alt="Dropup ICON" />
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
                <img src={dropUp} alt="Dropup icon" />
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
                <img src={dropDownIcon} alt="dropdown Icon" />
              </ul>
              <ul className="airports">
                <li>Airports</li>
                <img src={dropDownIcon} alt="dropdown Icon" />
              </ul>
              <div className="duration">
                <ul className="duration-dropup">
                  <li>Duration</li>
                  <img src={dropUp} alt="dropup Icon" />
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
                  <img src={dropUp} alt="dropup Icon" />
                </ul>
                <ul className="duration-range">
                  <li>700$</li>
                  <li>3000$</li>
                </ul>
                <input type="range" />
              </div>
              <div className="price-calculator">
                <ul className="price-calculator-wrapper">
                  <li>Price calculator</li>
                  <img src={dropUp} alt="Dropup Icon" />
                </ul>
                <ul className="payment-method">
                  <img src={cardIcon} alt="Card Logo" />
                  <li>Payment method</li>
                </ul>
                <input type="text" placeholder="Choose payment method" />
                <ul className="select-bags">
                  <img src={bagIcon} alt="Bag Icon" />
                  <li>Carry-on bag</li>
                </ul>
                <input type="text" placeholder="Select bags (0)" />
                <ul className="checked-bag">
                  <img src={caseIcon} alt="Case Icon" />
                  <li>Checked bag</li>
                </ul>
                <input type="text" placeholder="Select bags (0)" />
              </div>
            </div>
          </aside>
          <div className="flight-container">
            {flights.flight.slice(1, showMore).map((flight) => {
              return (
                <div key={flight.id} className="flight-details">
                  <ul className="airlines-company">
                    <img
                      src={georgianAirlinesLogo}
                      alt="Airlines Company Logo"
                    />
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
                    <img
                      src={handleLanding(flight.landing)}
                      alt="Landing Image"
                    />
                  </div>
                  <p className="flight-duration">{flight.duration} hours</p>
                  <div className="flight-deal">
                    <ul className="flight-price">
                      <li>Price</li>
                      <li>{`${flight.price}$`}</li>
                    </ul>
                    <button className="view-deal-button">View Deal</button>
                  </div>
                </div>
              );
            })}
            {!hideShowMore && (
              <button
                onClick={() => {
                  setShowMore(showMore + 10);
                  if (showMore >= 20) {
                    setHideShowMore(true);
                  }
                }}
                className="more-results-button"
              >
                Show more results
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
