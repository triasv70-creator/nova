
import React from 'react';
import logo from '../assets/logo.png';

export const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            backgroundColor: '#0F172A', // Dark footer for contrast
            color: 'white',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {/* Logo Image in Footer - White Filter for Dark BG */}
                        <a href="#" style={{ display: 'block', textDecoration: 'none' }}>
                            <img src={logo} alt="NOVA Marketing Lab" style={{
                                height: '80px',
                                width: 'auto',
                                objectFit: 'contain',
                                filter: 'brightness(0) invert(1)' // Turns the logo white
                            }} />
                        </a>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>Instagram</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>LinkedIn</a>
                        <a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>TikTok</a>
                    </div>

                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                        &copy; {new Date().getFullYear()} Nova Marketing Lab. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
};
