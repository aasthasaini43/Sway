import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SWAY</div>

      <div className="nav-links">
        <Link to="/wardrobe">Wardrobe</Link>
        <Link to="/style">Style Me</Link>
       <Link to="/looks">Looks</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <button className="add-piece">
        <Plus size={17} />
        Add Piece
      </button>
    </nav>
  );
}

export default Navbar;