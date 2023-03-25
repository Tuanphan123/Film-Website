import {Link} from "react-router-dom";

const Navbar = () => {
    return (
      <div className=""> 
        <Link to="/series" className="link">
            <span className="navbarmainLink">Series</span>
        </Link>
        <Link to="/movies" className="link">
            <span className="navbarmainLink">Movies</span>
        </Link>
      </div>
    );
};
  
export default Navbar;
  