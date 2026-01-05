
import React from 'react';

export const AboutUs: React.FC = () => {
    return (
        <section id="about" style={{ padding: 'var(--spacing-section) 5%', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div className="animate-up">
                    <h5 className="font-technical text-brand-blue" style={{ marginBottom: '1rem', letterSpacing: '2px' }}>[ NOSOTROS ]</h5>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        Laboratorio de <span className="text-gradient-growth">Estrategia</span> Digital
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        En NOVA Marketing Lab, no solo gestionamos marcas; las transformamos. Fusionamos creatividad disruptiva con análisis de datos para crear ecosistemas digitales que impulsan el crecimiento real.
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                        Nuestro enfoque "Antigravity" busca romper las barreras convencionales del marketing, permitiendo que tu negocio escale con agilidad y precisión en un mercado en constante cambio.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-brand-blue)' }}>100%</h4>
                            <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>ENFOQUE EN ROI</p>
                        </div>
                        <div style={{ borderLeft: '1px solid #E5E7EB', paddingLeft: '2rem' }}>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-brand-blue)' }}>24/7</h4>
                            <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>OPTIMIZACIÓN</p>
                        </div>
                    </div>
                </div>

                <div className="animate-up delay-200" style={{ position: 'relative' }}>
                    <div className="glass-panel" style={{ padding: '0.5rem', borderRadius: '12px', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '8px', overflow: 'hidden', backgroundColor: '#000' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=0&loop=1"
                                title="Nova Marketing Lab Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, var(--color-accent-cyan) 0%, var(--color-accent-lime) 100%)',
                        zIndex: -1,
                        borderRadius: '50%',
                        opacity: 0.3
                    }}></div>
                </div>
            </div>

            <style>{`
                    @media (max-width: 768px) {
                        .about-grid {
                            grid-template-columns: 1fr !important;
                            gap: 3rem !important;
                        }
                    }
                `}</style>
        </section>
    );
};
