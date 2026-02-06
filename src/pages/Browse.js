import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authAPI } from '../firebase';
import { toast } from 'react-toastify';
import { FaSignOutAlt, FaPlay, FaInfoCircle } from 'react-icons/fa';
import './Browse.css';

const Browse = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin');
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      authAPI.logout();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to logout');
    }
  };

  const movies = [
    {
      id: 1,
      title: 'Stranger Things',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=225&fit=crop'
    },
    {
      id: 2,
      title: 'The Witcher',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop'
    },
    {
      id: 3,
      title: 'Money Heist',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=225&fit=crop'
    },
    {
      id: 4,
      title: 'Wednesday',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=225&fit=crop'
    },
    {
      id: 5,
      title: 'The Crown',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop'
    },
    {
      id: 10,
      title: 'The Last of Us',
      image: 'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=225&fit=crop'
    },
    {
      id: 11,
      title: 'Black Mirror',
      image: 'https://images.unsplash.com/photo-1574267432644-f413c25ce1d0?w=400&h=225&fit=crop'
    }
  ];

  const trending = [
    {
      id: 6,
      title: 'Breaking Bad',
      image: 'https://images.unsplash.com/photo-1574267432644-f413c25ce1d0?w=400&h=225&fit=crop'
    },
    {
      id: 7,
      title: 'Dark',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=225&fit=crop'
    },
    {
      id: 8,
      title: 'Squid Game',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=225&fit=crop'
    },
    {
      id: 9,
      title: 'Narcos',
      image: 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=400&h=225&fit=crop'
    },
    {
      id: 12,
      title: 'The Mandalorian',
      image: 'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=225&fit=crop'
    },
    {
      id: 13,
      title: 'Peaky Blinders',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=225&fit=crop'
    },
    {
      id: 14,
      title: 'Vikings',
      image: 'https://images.unsplash.com/photo-1533923156502-be31530547fe?w=400&h=225&fit=crop'
    }
  ];

  const newContent = [
    {
      id: 15,
      title: 'The Office',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=225&fit=crop'
    },
    {
      id: 16,
      title: 'Friends',
      image: 'https://images.unsplash.com/photo-1522609925277-66fea332c575?w=400&h=225&fit=crop'
    },
    {
      id: 17,
      title: 'Game of Thrones',
      image: 'https://images.unsplash.com/photo-1464639351491-a172c2aa2911?w=400&h=225&fit=crop'
    },
    {
      id: 18,
      title: 'Better Call Saul',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=225&fit=crop'
    },
    {
      id: 19,
      title: 'Ozark',
      image: 'https://images.unsplash.com/photo-1556139943-4bdca53adf1e?w=400&h=225&fit=crop'
    },
    {
      id: 20,
      title: 'The Witcher',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop'
    }
  ];

  return (
    <div className="browse">
      {/* Header */}
      <header className={`browse-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <h1 className="logo">NETFLIX</h1>
          <nav className="header-nav">
            <button className="nav-link active">Home</button>
            <button className="nav-link">TV Shows</button>
            <button className="nav-link">Movies</button>
            <button className="nav-link">New & Popular</button>
            <button className="nav-link">My List</button>
          </nav>
        </div>
        <div className="header-right">
          <span className="user-email">{currentUser?.email}</span>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="banner-content">
          <h2 className="banner-title">Featured Content</h2>
          <p className="banner-description">
            Welcome to your personalized Netflix experience with enhanced security through
            Multi-Factor Authentication. Enjoy unlimited streaming of your favorite shows
            and movies.
          </p>
          <div className="banner-buttons">
            <button className="banner-btn play">
              <FaPlay /> Play
            </button>
            <button className="banner-btn info">
              <FaInfoCircle /> More Info
            </button>
          </div>
        </div>
        <div className="banner-fade"></div>
      </section>

      {/* Content Rows */}
      <div className="content-container">
        <section className="content-row">
          <h3 className="row-title">Popular on Netflix</h3>
          <div className="row-posters">
            {movies.map((movie) => (
              <div key={movie.id} className="poster">
                <img src={movie.image} alt={movie.title} />
                <div className="poster-overlay">
                  <h4 className="poster-title">{movie.title}</h4>
                  <div className="poster-actions">
                    <button className="poster-play-btn"><FaPlay /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-row">
          <h3 className="row-title">Trending Now</h3>
          <div className="row-posters">
            {trending.map((movie) => (
              <div key={movie.id} className="poster">
                <img src={movie.image} alt={movie.title} />
                <div className="poster-overlay">
                  <h4 className="poster-title">{movie.title}</h4>
                  <div className="poster-actions">
                    <button className="poster-play-btn"><FaPlay /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-row">
          <h3 className="row-title">New & Popular</h3>
          <div className="row-posters">
            {newContent.map((movie) => (
              <div key={movie.id} className="poster">
                <img src={movie.image} alt={movie.title} />
                <div className="poster-overlay">
                  <h4 className="poster-title">{movie.title}</h4>
                  <div className="poster-actions">
                    <button className="poster-play-btn"><FaPlay /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MFA Status Badge */}
      {currentUser && (
        <div className="mfa-badge">
          <span className="badge-icon">🔒</span>
          <span>Protected with MFA</span>
        </div>
      )}
    </div>
  );
};

export default Browse;
