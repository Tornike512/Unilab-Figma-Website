import { useState } from "react";
import { useNavigate } from "react-router-dom";

import homePageImage from "/src/assets/homepage.png";
import airPlanePhoto from "/src/assets/airplane-image.png";
import hotelPhoto from "/src/assets/hotel-image.png";
import shipPhoto from "/src/assets/ship-image.png";
import boatPhoto from "/src/assets/boat-image.png";
import travelVideo from "/src/assets/travel-video.mp4";
import barcelonaPhoto from "/src/assets/barcelona-image.png";
import romePhoto from "/src/assets/rome-image.png";
import parisPhoto from "/src/assets/paris-image.png";
import luxorPhoto from "/src/assets/luxor-image.png";
import tibetianPhoto from "/src/assets/tibetian-image.png";
import volcanoPhoto from "/src/assets/volcano-image.png";
import winterPhoto from "/src/assets/winter-image.png";
import startVideoButton from "/src/assets/start-video-button.png";
import sliderLeftButton from "/src/assets/slider-left-button.png";
import sliderRightButton from "/src/assets/slider-right-button.png";

import "./HomePage.scss";

export function HomePage() {
  const [startVideo, setStartVideo] = useState(false);

  const navigate = useNavigate();

  const handleVideoStart = () => {
    if (startVideo) {
      setStartVideo(false);
    } else {
      setStartVideo(true);
    }
  };

  return (
    <section className="home-page">
      <div className="home-page-main-image">
        <img src={homePageImage} alt="Home Page Image" />
      </div>
      <div className="home-page-main-text">
        <span>Visit Mountains In</span>
        <h1 className="home-page-country">ITALY</h1>
        <button
          onClick={() => navigate("/bookflight")}
          className="see-offer-button"
        >
          See offer
        </button>
      </div>
      <article className="services">
        <h2>Discover Our Services</h2>
        <p>
          ExploreEra provides a one-stop solution for individuals seeking
          well-planned journeys. These services include expert advice on
          destination selection, flight and accommodation bookings, and
          customized itineraries to individual preferences.
        </p>
        <span className="see-all-services">
          <span>see all</span>
        </span>
        <div className="service-images-grid">
          <div className="service-item">
            <img src={airPlanePhoto} alt="Airplane Photo" />
            <h3>Book Flight</h3>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
          <div className="service-item">
            <img src={hotelPhoto} alt="Hotel Photo" />
            <h3>Book Hotels</h3>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
          <div className="service-item">
            <img src={shipPhoto} alt="Ship Photo" />
            <h3>Book Cruises</h3>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
          <div className="service-item">
            <img src={boatPhoto} alt="Boat Photo" />
            <h3>Book family Vacation</h3>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
        </div>
      </article>
      <article className="travel-video">
        <h2>Watch Our Memorable Trips</h2>
        <div className="video-settings">
          <video onClick={handleVideoStart} controls src={travelVideo}>
            <source src={travelVideo} />
          </video>
          {!startVideo && (
            <img
              className="start-video-button"
              src={startVideoButton}
              alt="Start Video Button"
            />
          )}
        </div>
      </article>
      <article className="tour-offer-slider">
        <h2>Popular Tour Offers</h2>
        <span className="slider-buttons">
          <button className="slide-left-button">
            <img src={sliderLeftButton} alt="Slider Left Button" />
          </button>
          <button className="slide-right-button">
            <img src={sliderRightButton} alt="Slide Right Button" />
          </button>
        </span>
        <div className="slider-grid">
          <div className="slider-item">
            <img src={barcelonaPhoto} alt="City Image" />
            <h4>Barcelona, Spain</h4>
            <p className="tour-info">2 adults, 7 days</p>
            <span className="tour-price">2400$</span>
          </div>
          <div className="slider-item">
            <img src={romePhoto} alt="City Image" />
            <h4>Rome, Italy</h4>
            <p className="tour-info">2 adults, 3 days</p>
            <span className="tour-price">1800$</span>
          </div>
          <div className="slider-item">
            <img src={parisPhoto} alt="City Image" />
            <h4>Paris, France</h4>
            <p className="tour-info">2 adults, 4 days</p>
            <span className="tour-price">2100$</span>
          </div>
          <div className="slider-item">
            <img src={luxorPhoto} alt="City Image" />
            <h4>Luxor City, Egypt</h4>
            <p className="tour-info">2 adults, 3 days</p>
            <span className="tour-price">800$</span>
          </div>
        </div>
      </article>
      <article className="blogs">
        <h2>Blogs</h2>
        <div className="blog-grid">
          <div className="blog-item">
            <img src={tibetianPhoto} alt="Blog Tour Image" />
            <p>Interesting Tibetan Traditions</p>
          </div>
          <div className="blog-item">
            <img src={volcanoPhoto} alt="Blog Tour Image" />
            <p>Are There Volcanos In Hawaii?</p>
          </div>
          <div className="blog-item">
            <img src={winterPhoto} alt="Blog Tour Image" />
            <p>Winter in Iceland</p>
          </div>
        </div>
        <div className="blog-grid">
          <div className="blog-item">
            <img src={tibetianPhoto} alt="Blog Tour Image" />
            <p>Interesting Tibetan Traditions</p>
          </div>
          <div className="blog-item">
            <img src={volcanoPhoto} alt="Blog Tour Image" />
            <p>Are There Volcanos In Hawaii?</p>
          </div>
          <div className="blog-item">
            <img src={winterPhoto} alt="Blog Tour Image" />
            <p>Winter in Iceland</p>
          </div>
        </div>
      </article>
      <article className="book-a-trip">
        <div className="book-a-trip-wrapper">
          <h2>Ready To Book A Trip?</h2>
          <div className="select-grid">
            <select name="location">
              <option value="">Your starting location</option>
              <option value="">Tbilisi, Georgia</option>
              <option value="">Karlstad, Sweden</option>
              <option value="">Auckland, New Zealand</option>
            </select>
            <select name="tour-offer">
              <option value="">Choose a tour offer</option>
              <option value="">London, 15 days</option>
              <option value="">Chicago, 21 days</option>
              <option value="">Tokyo, 9 days</option>
            </select>
            <select name="choose-date">
              <option value="">Choose date</option>
              <option value="">10 August - 25 August</option>
              <option value="">5 December - 26 December</option>
              <option value="">3 Febuary - 12 Febuary</option>
            </select>
            <select name="persons">
              <option value="">Persons</option>
              <option value="">1 Person</option>
              <option value="">2 Persons</option>
              <option value="">3 Persons</option>
              <option value="">4 Persons</option>
            </select>
          </div>
          <button
            onClick={() => navigate("/bookflight")}
            className="book-now-button"
          >
            Book Now
          </button>
        </div>
      </article>
    </section>
  );
}
