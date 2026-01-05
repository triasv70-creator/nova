
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
                <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {/* Logo in a white card to handle opaque backgrounds elegantly */}
                        <a href="#" style={{
                            display: 'inline-block',
                            textDecoration: 'none',
                            backgroundColor: 'white',
                            padding: '1rem',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}>
                            <img src={logo} alt="NOVA Marketing Lab" style={{
                                height: '60px', // Adjusted for container padding
                                width: 'auto',
                                objectFit: 'contain'
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

                <style>{`
                    @media (max-width: 768px) {
                        .footer-content {
                            flex-direction: column !important;
                            text-align: center;
                            gap: 2rem !important;
                        }
                    }
                `}</style>
            </div>
        </footer>
    );
};
