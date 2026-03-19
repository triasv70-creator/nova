import React from 'react';
import brandLogo from '../assets/Logo_Nova_26.png';
import { Instagram, Linkedin, Music2 } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            backgroundColor: 'var(--bg-dark)', // #021238 from brand manual
            color: 'var(--color-text-light)',
            marginTop: 'auto',
            borderTop: '1px solid rgba(79, 238, 242, 0.1)'
        }}>
            <div className="container">
                <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} className="hover-lift">
                            <img src={brandLogo} alt="NOVA Marketing Lab" style={{
                                height: '50px',
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
