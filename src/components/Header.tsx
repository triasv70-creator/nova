import React, { useState } from 'react';
import logo from '../assets/logo.png';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 5%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid rgba(0,0,0,0.03)',
            height: 'auto',
            minHeight: '80px',
            flexWrap: 'wrap'
        }}>
            {/* Brand Identity Block - Image Logo */}
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src={logo} alt="NOVA Marketing Lab" style={{
                    height: 'clamp(50px, 8vw, 120px)',
                    width: 'auto',
                    objectFit: 'contain'
                }} />
            </a>

            {/* Hamburger Button (Mobile Only) */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    color: 'var(--color-text-main)',
                    padding: '0.5rem'
                }}
                className="mobile-menu-btn"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>

            <nav style={{
                transition: 'all 0.3s ease'
            }} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul style={{
                    display: 'flex',
                    gap: '2rem',
                    listStyle: 'none',
                    alignItems: 'center'
                }}>
                    <li>
                        <a href="#services" onClick={() => setIsMenuOpen(false)} style={{
                            textDecoration: 'none',
                            color: 'var(--color-text-main)',
                            fontWeight: 500,
                            fontSize: '0.95rem'
                        }}>Qué Hacemos</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setIsMenuOpen(false)} style={{
                            textDecoration: 'none',
                            color: 'var(--color-text-main)',
                            fontWeight: 500,
                            fontSize: '0.95rem'
                        }}>Nosotros</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover-lift" style={{
                            textDecoration: 'none',
                            backgroundColor: 'var(--color-brand-blue)',
                            color: 'white',
                            padding: '0.6rem 1.2rem',
                            borderRadius: '2px',
                            fontWeight: 600,
                            fontSize: '0.9rem'
                        }}>
                            Agendar Asesoría
                        </a>
                    </li>
                </ul>
            </nav>

            <style>{`
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    .nav-menu {
                        display: none;
                        width: 100%;
                        padding: 1.5rem 0;
                    }
                    .nav-menu.open {
                        display: block !important;
                    }
                    .nav-menu ul {
                        flex-direction: column;
                        gap: '1.5rem' !important;
                        text-align: center;
                    }
                    .nav-menu li {
                        width: 100%;
                        margin-bottom: 1.5rem;
                    }
                }
            `}</style>
        </header>
    );
};
