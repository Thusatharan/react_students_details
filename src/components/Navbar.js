import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navigation">
            <h3>Student Management</h3>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Student</Link>
            </div>
        </nav>
    );
}

export default Navbar;