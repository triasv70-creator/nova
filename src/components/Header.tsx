import React, { useState } from 'react';
import logo from '../assets/logo.png';

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            padding: '1rem 6%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pointerEvents: 'none', // Allow clicking through the header area
            zIndex: 1000
        }}>
            {/* Logo Island */}
            <div style={{
                pointerEvents: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '0.75rem 1.5rem',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center'
            }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} className="hover-lift">
                    <img src={logo} alt="NOVA Marketing Lab" style={{
                        height: 'clamp(70px, 10vw, 110px)',
                        width: 'auto',
                        objectFit: 'contain'
                    }} />
                </a>
            </div>

            {/* Nav Pill Island */}
            <div style={{
                pointerEvents: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                padding: '0.6rem 2rem',
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                height: '65px'
            }}>
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
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
                                fontSize: '0.9rem',
                                opacity: 0.8,
                                transition: 'opacity 0.2s'
                            }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}>
                                Qué Hacemos
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setIsMenuOpen(false)} style={{
                                textDecoration: 'none',
                                color: '#0F172A',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                opacity: 0.8,
                                transition: 'opacity 0.2s'
                            }} onMouseOver={(e) => e.currentTarget.style.opacity = '1'} onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}>
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
                                fontSize: '0.85rem',
                                letterSpacing: '0.02em',
                                boxShadow: '0 10px 20px rgba(41, 98, 255, 0.2)'
                            }}>
                                Agendar Asesoría
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger Button (Mobile Only) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                        color: 'var(--color-text-main)',
                        padding: '0.2rem'
                    }}
                    className="mobile-menu-btn"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            <style>{`
                @media (max-width: 1100px) {
                    header {
                        padding: 0.75rem 4% !important;
                    }
                    div[style*="height: 65px"] {
                        gap: 1rem !important;
                        padding: 0.5rem 1.2rem !important;
                        height: 55px !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    .nav-menu {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        width: 200px;
                        background: white;
                        border-radius: 20px;
                        padding: 1.5rem;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                        display: none;
                        border: 1px solid #F1F5F9;
                    }
                    .nav-menu.open {
                        display: block !important;
                    }
                    .nav-menu ul {
                        flex-direction: column;
                        gap: 1.25rem !important;
                    }
                    .nav-menu li {
                        width: 100%;
                        text-align: center;
                    }
                }
            `}</style>
        </header>
    );
};
