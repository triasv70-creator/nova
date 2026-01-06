import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
                setIsMenuOpen(false); // Close menu when returning to top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            padding: isScrolled ? '0.75rem 6%' : '1rem 6%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none',
            zIndex: 1000,
            transition: 'all 0.3s ease'
        }}>
            {/* Logo Island */}
            <div style={{
                pointerEvents: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: isScrolled ? '0.5rem 1.2rem' : '0.75rem 1.5rem',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                transition: 'all 0.3s ease'
            }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} className="hover-lift">
                    <img src={logo} alt="NOVA Marketing Lab" style={{
                        height: isScrolled ? '60px' : 'clamp(70px, 10vw, 110px)',
                        width: 'auto',
                        objectFit: 'contain',
                        transition: 'all 0.3s ease'
                    }} />
                </a>
            </div>

            {/* Nav Pill Island */}
            <div style={{
                pointerEvents: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: isScrolled ? '0.5rem' : '0.6rem 2rem',
                borderRadius: isScrolled ? '50%' : '100px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isScrolled ? '0' : '2rem',
                height: isScrolled ? '60px' : '65px',
                width: isScrolled ? '60px' : 'auto',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`} style={{
                    display: isScrolled ? (isMenuOpen ? 'block' : 'none') : 'block'
                }}>
                    <ul style={{
                        display: 'flex',
                        gap: '2.5rem',
                        listStyle: 'none',
                        alignItems: 'center',
                        margin: 0,
                        padding: 0
                    }}>
                        <li>
                            <a href="#services" onClick={() => setIsMenuOpen(false)} style={{
                                textDecoration: 'none',
                                color: '#0F172A',
                                fontWeight: 700,
                                fontSize: isScrolled ? '1rem' : '0.9rem',
                                opacity: 0.8
                            }}>
                                Qué Hacemos
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setIsMenuOpen(false)} style={{
                                textDecoration: 'none',
                                color: '#0F172A',
                                fontWeight: 700,
                                fontSize: isScrolled ? '1rem' : '0.9rem',
                                opacity: 0.8
                            }}>
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover-lift" style={{
                                textDecoration: 'none',
                                backgroundColor: 'var(--color-brand-blue)',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '100px',
                                fontWeight: 800,
                                fontSize: '0.85rem'
                            }}>
                                Agendar Asesoría
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger Button (Visible when scrolled or mobile) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                        color: 'var(--color-text-main)',
                        padding: '0.2rem',
                        width: '100%',
                        height: '100%',
                        display: (isScrolled || window.innerWidth <= 1100) ? 'flex' : 'none',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    className="mobile-menu-btn"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            <style>{`
                .mobile-menu-btn {
                    display: none !important;
                }
                
                @media (max-width: 1100px) {
                    .mobile-menu-btn {
                        display: flex !important;
                    }
                    .nav-menu:not(.open) {
                        display: none !important;
                    }
                }

                /* Show burger if scrolled even on desktop */
                ${isScrolled ? `
                    .mobile-menu-btn {
                        display: flex !important;
                    }
                    .nav-menu:not(.open) {
                        display: none !important;
                    }
                ` : ''}

                .nav-menu.open {
                    position: absolute;
                    top: calc(100% + 15px);
                    right: 0;
                    width: 200px;
                    background: white;
                    border-radius: 20px;
                    padding: 1.5rem;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    display: block !important;
                    border: 1px solid #F1F5F9;
                    pointer-events: auto;
                }
                
                .nav-menu.open ul {
                    flex-direction: column;
                    gap: 1.25rem !important;
                }
                
                .nav-menu.open li {
                    width: 100%;
                    text-align: center;
                }
            `}</style>
        </header>
    );
};
