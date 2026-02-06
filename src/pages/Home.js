import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        
        <nav className="navbar">
          <div className="nav-left">
            <h1 className="logo">NETFLIX</h1>
          </div>
          <div className="nav-right">
            <Link to="/signin" className="btn-signin">Sign In</Link>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">Unlimited movies, TV shows, and more</h1>
          <p className="hero-subtitle">Watch anywhere. Cancel anytime.</p>
          <p className="hero-text">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="hero-cta">
            <button onClick={() => navigate('/signup')} className="btn-get-started">
              Get Started <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <div className="feature-content">
            <h2>Enjoy on your TV</h2>
            <p>
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
              players, and more.
            </p>
          </div>
          <div className="feature-img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="TV"
            />
          </div>
        </div>

        <div className="feature reverse">
          <div className="feature-img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="Mobile"
            />
          </div>
          <div className="feature-content">
            <h2>Download your shows to watch offline</h2>
            <p>Save your favorites easily and always have something to watch.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-content">
            <h2>Watch everywhere</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet, laptop,
              and TV.
            </p>
          </div>
          <div className="feature-img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="Devices"
            />
          </div>
        </div>

        <div className="feature reverse">
          <div className="feature-img">
            <img
              src="https://occ-0-2430-2433.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK2Fg1nabAALuaqpDqeuNGH4vtQ.png"
              alt="Kids"
            />
          </div>
          <div className="feature-content">
            <h2>Create profiles for kids</h2>
            <p>
              Send kids on adventures with their favorite characters in a space made
              just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h3>What is Netflix?</h3>
          </div>
          <div className="faq-item">
            <h3>How much does Netflix cost?</h3>
          </div>
          <div className="faq-item">
            <h3>Where can I watch?</h3>
          </div>
          <div className="faq-item">
            <h3>How do I cancel?</h3>
          </div>
          <div className="faq-item">
            <h3>What can I watch on Netflix?</h3>
          </div>
          <div className="faq-item">
            <h3>Is Netflix good for kids?</h3>
          </div>
        </div>
        <div className="faq-cta">
          <p>
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <button onClick={() => navigate('/signup')} className="btn-get-started">
            Get Started <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Questions? Call 000-800-040-1842</p>
          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-link">FAQ</span>
              <span className="footer-link">Investor Relations</span>
              <span className="footer-link">Privacy</span>
              <span className="footer-link">Speed Test</span>
            </div>
            <div className="footer-column">
              <span className="footer-link">Help Center</span>
              <span className="footer-link">Jobs</span>
              <span className="footer-link">Cookie Preferences</span>
              <span className="footer-link">Legal Notices</span>
            </div>
            <div className="footer-column">
              <span className="footer-link">Account</span>
              <span className="footer-link">Ways to Watch</span>
              <span className="footer-link">Corporate Information</span>
              <span className="footer-link">Netflix Originals</span>
            </div>
            <div className="footer-column">
              <span className="footer-link">Media Center</span>
              <span className="footer-link">Terms of Use</span>
              <span className="footer-link">Contact Us</span>
            </div>
          </div>
          <p className="footer-country">Netflix Clone with MFA</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
