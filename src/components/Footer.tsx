import React from 'react';
import logo from '../assets/logo.png';
import { Instagram, Linkedin, Music2 } from 'lucide-react';

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

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://www.instagram.com/novamktlab" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ color: 'white', opacity: 0.8 }}>
                            <Instagram size={24} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ color: 'white', opacity: 0.8 }}>
                            <Linkedin size={24} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ color: 'white', opacity: 0.8 }}>
                            <Music2 size={24} /> {/* Using Music2 for TikTok */}
                        </a>
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
