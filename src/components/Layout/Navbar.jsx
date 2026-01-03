import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isDark, setIsDark] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('light-mode');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Internships & Certificates', path: '/internships' },
        { name: 'Profiles', path: '/profiles' },
        { name: 'Resume', path: '/resume' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="navbar">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="nav-brand"
            >
                Portfolio
            </motion.div>

            <div className="nav-content">
                <button className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {links.map((link) => (
                        <li key={link.path} className="nav-item">
                            <Link
                                to={link.path}
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="active-nav-bg"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={toggleTheme}
                    className="theme-toggle"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
