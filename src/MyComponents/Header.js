// Import necessary dependencies
import React from 'react';
import './Header.css'; // Import custom CSS for the Header component
import PropTypes from 'prop-types'; // For validating prop types
import { Link } from "react-router-dom"; // For navigation links

// Header component definition
export default function Header(props) {
    return (
        // Navigation bar structure
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Bootstrap classes for styling */}
            <div className="container-fluid"> {/* Container for navbar content */}
                {/* Brand name linked to the home page */}
                <Link className="navbar-brand" to="/">{props.title}</Link>
                
                {/* Button for toggling the navbar on smaller screens */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span> {/* Icon for the toggle button */}
                </button>
                
                {/* Collapsible navbar content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* Navigation links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Link to the home page */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* Link to the about page */}
                            <Link className="nav-link" to="/about">About</Link>
                        </li>  
                    </ul>
                    
                    {/* Optional search bar rendered based on the searchBar prop */}
                    { props.searchBar ? 
                        <form className="d-flex">
                            {/* Input field for search */}
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                            />
                            {/* Search button */}
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        : "" /* Render nothing if searchBar is false */}
                </div>
            </div>
        </nav>
    );
}
// Default props for the Header component
Header.defaultProps = {
    title: "Your Title Here", // Default title for the navbar
    searchBar: true // Show the search bar by default
};
// Prop types for validating the props passed to the Header component
Header.propTypes = {
    title: PropTypes.string, // Title must be a string
    searchBar: PropTypes.bool.isRequired // searchBar must be a boolean and is required
};
