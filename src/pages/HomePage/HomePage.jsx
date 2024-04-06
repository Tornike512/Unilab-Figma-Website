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

import "./HomePage.scss";

export function HomePage() {
  return (
    <section className="home-page">
      <img src={homePageImage} alt="Home Page Image" />
      <div className="home-page-main-text">
        <span>Visit Mountains In</span>
        <h1 className="home-page-country">ITALY</h1>
        <button className="see-offer-button">See offer</button>
      </div>
      <article className="services">
        <h2>Discover Our Services</h2>
        <p>
          ExploreEra provides a one-stop solution for individuals seeking
          well-planned journeys. These services include expert advice on
          destination selection, flight and accommodation bookings, and
          customized itineraries to individual preferences.
        </p>
        <details>see all</details>
        <div className="service-images-grid">
          <div className="service-item">
            <img src={airPlanePhoto} alt="Airplane Photo" />
            <title>Book Flight</title>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
          <div className="service-item">
            <img src={hotelPhoto} alt="Hotel Photo" />
            <title>Book Hotels</title>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
          <div className="service-item">
            <img src={shipPhoto} alt="Ship Photo" />
            <title>Book Cruises</title>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
          <div className="service-item">
            <img src={boatPhoto} alt="Boat Photo" />
            <title>Book family Vacation</title>
            <p>
              book memorable journey with our flight booking services! we're
              thrilled to present you flight options to suit your travel needs.
            </p>
          </div>
        </div>
      </article>
      <article className="video-section">
        <h2>Watch Our Memorable Trips</h2>
        <video src={travelVideo}></video>
      </article>
      <article className="tour-offer-slider">
        <h2>Popular Tour Offers</h2>
        <span className="slider-buttons">
          <button className="slide-left-button"></button>
          <button className="slide-right-button"></button>
        </span>
        <div className="slider-grid">
          <div className="slider-item">
            <img src={barcelonaPhoto} alt="City Image" />
            <h4>Barcelona, Spain</h4>
            <span className="tour-info">2 adults, 7 days</span>
            <span className="tour-price">2400$</span>
          </div>
          <div className="slider-item">
            <img src={romePhoto} alt="City Image" />
            <h4>Rome, Italy</h4>
            <span className="tour-info">2 adults, 3 days</span>
            <span className="tour-price">1800$</span>
          </div>
          <div className="slider-item">
            <img src={parisPhoto} alt="City Image" />
            <h4>Paris, France</h4>
            <span className="tour-info">2 adults, 4 days</span>
            <span className="tour-price">2100$</span>
          </div>
          <div className="slider-item">
            <img src={luxorPhoto} alt="City Image" />
            <h4>Luxor City, Egypt</h4>
            <span className="tour-info">2 adults, 3 days</span>
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
        <h2>Ready To Book A Trip?</h2>
        <div className="select-grid">
          <select name="location">
            <option value=""></option>
          </select>
          <select name="tour-offer">
            <option value=""></option>
          </select>
          <select name="choose-date">
            <option value=""></option>
          </select>
          <select name="persons">
            <option value=""></option>
          </select>
        </div>
        <button className="book-now-button">Book Now</button>
      </article>
    </section>
  );
}
