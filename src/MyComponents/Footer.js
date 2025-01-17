import React from 'react'
import './Footer.css'
export const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <p className="text-center mb-2">
                Copyright &copy; MyTodosList.com
            </p>
            <div className="text-center">
                <a href="/about" className="text-light mx-2">About Us</a>
                <a href="/privacy" className="text-light mx-2">Privacy Policy</a>
                <a href="/contact" className="text-light mx-2">Contact</a>
            </div>
            <div className="text-center mt-3">
                <a href="https://facebook.com" className="text-light mx-2">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" className="text-light mx-2">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" className="text-light mx-2">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    )
}
