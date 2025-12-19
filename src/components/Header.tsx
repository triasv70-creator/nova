
import React from 'react';
import logo from '../assets/logo.png';

export const Header: React.FC = () => {
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
            height: '160px' // Much taller header
        }}>
            {/* Brand Identity Block - Image Logo */}
            <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img src={logo} alt="NOVA Marketing Lab" style={{
                    height: '130px', // Maximum visual impact
                    width: 'auto',
                    objectFit: 'contain'
                }} />
            </a>

            <nav>
                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
                    <li>
                        <a href="#services" style={{
                            textDecoration: 'none',
                            color: 'var(--color-text-main)',
                            fontWeight: 500,
                            fontSize: '0.95rem'
                        }}>Qué Hacemos</a>
                    </li>
                    <li>
                        <a href="#about" style={{
                            textDecoration: 'none',
                            color: 'var(--color-text-main)',
                            fontWeight: 500,
                            fontSize: '0.95rem'
                        }}>Nosotros</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover-lift" style={{
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
        </header>
    );
};
