import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import properties from "./property.json";

import dropDownIcon from "/src/assets/dropdown-icon.png";
import plusIcon from "/src/assets/plus-icon.png";
import fiveStars from "/src/assets/five-stars.png";
import fourStars from "/src/assets/four-stars.png";
import threeStars from "/src/assets/three-stars.png";
import twoStars from "/src/assets/two-stars.png";
import oneStar from "/src/assets/one-star.png";

import "./Stays.scss";

export default function Stays() {
  const [starsCount, setStarsCount] = useState([]);
  const [loadAllStays, setLoadAllStays] = useState(false);
  const [loadMoreStays, setLoadMoreStays] = useState(5);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
  const [loadStays, setLoadStays] = useState(false);
  const [hideSearchGrid, setHideSearchGrid] = useState(false);
  const [showFilterButton, setShowFilterButton] = useState(false);

  useEffect(() => {
    setLoadAllStays(true);
  }, []);

  const handleRatingStars = (stars) => {
    if (stars === 5) {
      return fiveStars;
    } else if (stars === 4) {
      return fourStars;
    } else if (stars === 3) {
      return threeStars;
    } else if (stars === 2) {
      return twoStars;
    } else if (stars === 1) {
      return oneStar;
    }
  };

  const filterByStars = properties.filter((property) => {
    if (loadAllStays || starsCount.length === 0) {
      return property.rating;
    } else {
      return starsCount.includes(property.rating);
    }
  });

  const removeFiveStarsRating = () => {
    if (!starsCount.includes(5)) {
      setStarsCount((prev) => {
        return [...prev, 5];
      });
      setLoadAllStays(false);
    } else {
      setStarsCount(
        starsCount.filter((stars) => {
          return stars !== 5;
        })
      );
      setLoadAllStays(false);
    }
    setLoadMoreStays(5);
    if (filterByStars.length > 5) {
      setShowLoadMoreButton(true);
    }
  };

  const removeFourStarsRating = () => {
    if (!starsCount.includes(4)) {
      setStarsCount((prev) => {
        return [...prev, 4];
      });
      setLoadAllStays(false);
    } else {
      setStarsCount(
        starsCount.filter((stars) => {
          return stars !== 4;
        })
      );
      setLoadAllStays(false);
    }
    setLoadMoreStays(5);
    if (filterByStars.length > 5) {
      setShowLoadMoreButton(true);
    }
  };

  const removeThreeStarsRating = () => {
    if (!starsCount.includes(3)) {
      setStarsCount((prev) => {
        return [...prev, 3];
      });
      setLoadAllStays(false);
    } else {
      setStarsCount(
        starsCount.filter((stars) => {
          return stars !== 3;
        })
      );
      setLoadAllStays(false);
    }
    setLoadMoreStays(5);
    if (filterByStars.length > 5) {
      setShowLoadMoreButton(true);
    }
  };

  const removeTwoStarsRating = () => {
    if (!starsCount.includes(2)) {
      setStarsCount((prev) => {
        return [...prev, 2];
      });
      setLoadAllStays(false);
    } else {
      setStarsCount(
        starsCount.filter((stars) => {
          return stars !== 2;
        })
      );
      setLoadAllStays(false);
    }
    setLoadMoreStays(5);
    if (filterByStars.length > 5) {
      setShowLoadMoreButton(true);
    }
  };
  const removeOneStarRating = () => {
    if (!starsCount.includes(1)) {
      setStarsCount((prev) => {
        return [...prev, 1];
      });
      setLoadAllStays(false);
    } else {
      setStarsCount(
        starsCount.filter((stars) => {
          return stars !== 1;
        })
      );
      setLoadAllStays(false);
    }
    setLoadMoreStays(5);
    if (filterByStars.length > 5) {
      setShowLoadMoreButton(true);
    } else {
      setShowLoadMoreButton(false);
    }
  };

  const handleShowLoadMoreButton = () => {
    setLoadMoreStays(loadMoreStays + 5);
    if (loadMoreStays > filterByStars.length - 5) {
      setShowLoadMoreButton(false);
    }
  };

  return (
    <section className="stays-section">
      {!hideSearchGrid && (
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
          <button
            onClick={() => {
              setLoadStays(true);
              setHideSearchGrid(true);
            }}
            className="search-button"
          >
            Search
          </button>
        </ul>
      )}
      {loadStays && (
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
                <input onChange={removeFiveStarsRating} type="checkbox" />
                <p>5 Stars</p>
              </li>
              <li>
                <input onChange={removeFourStarsRating} type="checkbox" />
                <p>4 Stars</p>
              </li>
              <li>
                <input onChange={removeThreeStarsRating} type="checkbox" />
                <p>3 Stars</p>
              </li>
              <li>
                <input onChange={removeTwoStarsRating} type="checkbox" />
                <p>2 Stars</p>
              </li>
              <li>
                <input onChange={removeOneStarRating} type="checkbox" />
                <p>1 Star</p>
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
            <button className="filter-for-small-screens">Filters</button>
            {filterByStars.slice(0, loadMoreStays).map((property) => {
              return (
                <div key={property.title} className="property-container">
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
                        <img
                          src={handleRatingStars(property.rating)}
                          alt="Property Rating By Stars"
                        />
                        <li>Price:</li>
                        <li className="price">{`${property.price}$`}</li>
                      </ul>
                    </div>
                    <button className="show-details-button">
                      Show details
                    </button>
                  </div>
                </div>
              );
            })}
            {showLoadMoreButton && (
              <button
                onClick={handleShowLoadMoreButton}
                className="show-more-results"
              >
                Show more results
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
