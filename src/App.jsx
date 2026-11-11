
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ClothingCard from './components/ClothingCard';
import { Routes, Route, Link } from 'react-router-dom';

// =========================
// HOME PAGE
// =========================

function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR PERSONAL WARDROBE</p>

          <h1>
            Your wardrobe.
            <br />
            <em>Your way.</em>
          </h1>

          <p className="hero-text">
            Discover new ways to wear what you already own.
            Build looks that feel like you.
          </p>

          <div className="hero-actions">
            <Link to="/wardrobe" className="primary-btn">
              Explore Wardrobe
            </Link>

            <Link to="/style" className="secondary-btn">
              Style Me →
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image">
            <img src="/hero-fashion.jpg" alt="Fashion styling" />
          </div>

          <div className="floating-card">
            <span>✦</span>
            <div>
              <strong>Today's style</strong>
              <p>Effortless & minimal</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SWAY WORKS */}
      <section className="how-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW SWAY WORKS</p>
            <h2>
              Less guessing.
              <br />
              More <em>styling.</em>
            </h2>
          </div>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span>01</span>
            <h3>Add what you own</h3>
            <p>
              Build your digital wardrobe with the clothes,
              shoes and accessories you already have.
            </p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Find your vibe</h3>
            <p>
              Choose an occasion, mood or style and discover
              combinations that fit the moment.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Create your look</h3>
            <p>
              Put pieces together, save your favourite outfits
              and make getting dressed easier.
            </p>
          </div>
        </div>
      </section>

      {/* STYLE INSPIRATION */}
      <section className="inspiration-section">
        <div className="inspiration-heading">
          <div>
            <p className="eyebrow">A LITTLE STYLE INSPIRATION</p>
            <h2>
              Find your next
              <br />
              <em>favourite look.</em>
            </h2>
          </div>

          <Link to="/style" className="inspiration-link">
            Find your style →
          </Link>
        </div>

        <div className="inspiration-grid">
          <div className="inspiration-card">
            <div className="inspiration-image">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"
                alt="Casual everyday fashion"
              />
            </div>
            <div className="inspiration-info">
              <h3>Everyday Ease</h3>
              <p>Casual · Effortless</p>
            </div>
          </div>

          <div className="inspiration-card">
            <div className="inspiration-image">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
                alt="Elegant fashion outfit"
              />
            </div>
            <div className="inspiration-info">
              <h3>Quiet Elegance</h3>
              <p>Minimal · Refined</p>
            </div>
          </div>

          <div className="inspiration-card">
            <div className="inspiration-image">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85"
                alt="Contemporary street style"
              />
            </div>
            <div className="inspiration-info">
              <h3>Street Stories</h3>
              <p>Bold · Contemporary</p>
            </div>
          </div>

          <div className="inspiration-card">
            <div className="inspiration-image">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85"
                alt="Modern fashion inspiration"
              />
            </div>
            <div className="inspiration-info">
              <h3>Soft Statements</h3>
              <p>Chic · Feminine</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="home-cta">
        <p className="eyebrow">YOUR WARDROBE, REIMAGINED</p>
        <h2>
          You already have
          <br />
          <em>something to wear.</em>
        </h2>
        <p>
          Let's find a new way to wear it.
        </p>
        <Link to="/wardrobe" className="primary-btn">
          Explore Your Wardrobe →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-brand">
          <h2>SWAY</h2>
          <p>Your wardrobe. Your way.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/wardrobe">Wardrobe</Link>
          <Link to="/style">Style Me</Link>
          <Link to="/looks">Looks</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <p className="footer-copy">
          © 2026 SWAY. Made for your everyday style.
        </p>
      </footer>
    </>
  );
}

// =========================
// WARDROBE PAGE
// =========================

function Wardrobe() {
  const [activeCategory, setActiveCategory] = useState('All');

  const clothes = [
    {
      name: 'White Shirt',
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Black Trousers',
      category: 'Bottoms',
      image: 'https://images.unsplash.com/photo-1506629905607-d9c297d5d4e4?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Denim Jacket',
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Minimal Dress',
      category: 'Dresses',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Classic Sneakers',
      category: 'Shoes',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c6a62?auto=format&fit=crop&w=700&q=80',
    },
    {
      name: 'Brown Bag',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const filteredClothes =
    activeCategory === 'All'
      ? clothes
      : clothes.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />

      <section className="wardrobe-page">
        <p className="eyebrow">YOUR COLLECTION</p>
        <h1>Your Wardrobe</h1>

        <p className="wardrobe-intro">
          Everything you own, all in one place.
        </p>

        <div className="category-tabs">
          {['All', 'Tops', 'Bottoms', 'Dresses', 'Shoes', 'Accessories'].map(
            (category) => (
              <button
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="wardrobe-grid">
          {filteredClothes.map((item) => (
            <ClothingCard
              key={item.name}
              image={item.image}
              name={item.name}
              category={item.category}
            />
          ))}
        </div>
      </section>
    </>
  );
}

// =========================
// STYLE ME PAGE
// =========================

function StyleMe() {
  return (
    <>
      <Navbar />

      <section className="style-page">
        <div className="style-header">
          <p className="eyebrow">PERSONAL STYLING</p>
          <h1>
            What are you
            <br />
            <em>wearing today?</em>
          </h1>
          <p>
            Tell SWAY a little about your day and discover
            looks from your own wardrobe.
          </p>
        </div>

        <div className="style-options">
          <div className="style-step">
            <span>01</span>
            <div>
              <h2>What's the occasion?</h2>
              <div className="option-list">
                <button>Everyday</button>
                <button>College</button>
                <button>Date</button>
                <button>Party</button>
                <button>Work</button>
              </div>
            </div>
          </div>

          <div className="style-step">
            <span>02</span>
            <div>
              <h2>What's your vibe?</h2>
              <div className="option-list">
                <button>Minimal</button>
                <button>Casual</button>
                <button>Elegant</button>
                <button>Street</button>
                <button>Cozy</button>
              </div>
            </div>
          </div>

          <div className="style-step">
            <span>03</span>
            <div>
              <h2>Anything else?</h2>
              <div className="option-list">
                <button>Comfort first</button>
                <button>Something new</button>
                <button>Keep it simple</button>
              </div>
            </div>
          </div>
        </div>

        <button className="style-submit">
          Create My Look →
        </button>
      </section>
    </>
  );
}

// =========================
// LOOKS PAGE
// =========================

function Looks() {
  const looks = [
    {
      name: 'Effortless Minimal',
      occasion: 'Everyday',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Weekend Layers',
      occasion: 'Casual',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Soft & Simple',
      occasion: 'Brunch',
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Classic Evening',
      occasion: 'Dinner',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <>
      <Navbar />

      <section className="looks-page">
        <p className="eyebrow">YOUR STYLE COLLECTION</p>
        <h1>Your Looks</h1>

        <p className="looks-intro">
          Outfits you've created, saved, and loved.
        </p>

        <div className="looks-grid">
          {looks.map((look) => (
            <div className="look-card" key={look.name}>
              <div className="look-image">
                <img src={look.image} alt={look.name} />
              </div>

              <div className="look-info">
                <div>
                  <h3>{look.name}</h3>
                  <p>{look.occasion}</p>
                </div>
                <span className="save-icon">♡</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// =========================
// PROFILE PAGE
// =========================

function Profile() {
  return (
    <>
      <Navbar />

      <section className="profile-page">
        <div className="profile-header">
          <p className="eyebrow">YOUR STYLE SPACE</p>
          <h1>Your Profile</h1>

          <p className="profile-intro">
            Tell Sway a little about your style so your wardrobe can feel
            more personal.
          </p>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-avatar">A</div>
            <div>
              <h2>Aastha</h2>
              <p>Style explorer</p>
            </div>
          </div>

          <div className="profile-section">
            <span className="profile-label">STYLE PREFERENCES</span>

            <div className="profile-row">
              <div>
                <h3>Favorite vibe</h3>
                <p>How you usually like to dress</p>
              </div>
              <span>Minimal</span>
            </div>

            <div className="profile-row">
              <div>
                <h3>Go-to occasion</h3>
                <p>Where you need outfit inspiration most</p>
              </div>
              <span>Everyday</span>
            </div>

            <div className="profile-row">
              <div>
                <h3>Fit preference</h3>
                <p>How you prefer your clothes to feel</p>
              </div>
              <span>Relaxed</span>
            </div>
          </div>

          <div className="profile-section">
            <span className="profile-label">WARDROBE</span>

            <div className="profile-stats">
              <div>
                <strong>24</strong>
                <span>Pieces</span>
              </div>
              <div>
                <strong>8</strong>
                <span>Looks</span>
              </div>
              <div>
                <strong>5</strong>
                <span>Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// =========================
// MAIN APP
// =========================

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/style" element={<StyleMe />} />
        <Route path="/looks" element={<Looks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
