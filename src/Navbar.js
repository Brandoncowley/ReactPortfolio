import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h4>Brandon Cowley</h4>
            <div className="links">
                <Link to = "/">Home</Link>
                <Link to = "/portfolio">Portfolio</Link>
                <Link to = "/contact">Contact</Link>
                <Link to = "/resume">Resume</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;