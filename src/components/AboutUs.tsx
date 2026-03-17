
import React from 'react';

export const AboutUs: React.FC = () => {
    return (
        <section id="about" style={{ padding: 'var(--spacing-section) 5%', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div className="animate-up">
                    <h5 className="font-technical" style={{ color: 'var(--color-brand-mint)', marginBottom: '1rem', letterSpacing: '2px', fontWeight: 600 }}>[ NOSOTROS ]</h5>
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem', lineHeight: '1.1', fontFamily: 'var(--font-brand)', fontWeight: 800 }}>
                        Tu Laboratorio de <span style={{ color: 'var(--color-brand-blue)' }}>Estrategia</span> Digital
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '1.1rem' }}>
                        En Nova Marketing Lab no vendemos paquetes genéricos. Somos tu aliado estratégico: estudiamos tu negocio, entendemos tus objetivos y diseñamos soluciones que realmente funcionan.
                    </p>
                    <div style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1rem' }}>
                        <p style={{ marginBottom: '0.5rem' }}>Nuestro enfoque combina:</p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem' }}>
                            <li>Análisis profundo de tu mercado y audiencia</li>
                            <li>Tecnología innovadora (IA, automatización, herramientas de vanguardia)</li>
                            <li>Estrategias data-driven para decisiones basadas en resultados reales</li>
                            <li>Flexibilidad total para adaptarnos a tu presupuesto y etapa de crecimiento</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-brand-blue)' }}>100%</h4>
                            <p style={{ fontSize: '0.8rem', fontWeight: 700 }}>INNOVACIÓN</p>
                            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Soluciones adaptadas a tu realidad</p>
                        </div>
                        <div style={{ borderLeft: '1px solid rgba(2, 18, 56, 0.1)', paddingLeft: '2rem' }}>
                            <h4 style={{ fontSize: '2rem', color: 'var(--color-brand-blue)' }}>24/7</h4>
                            <p style={{ fontSize: '0.8rem', fontWeight: 700 }}>OPTIMIZACIÓN</p>
                            <p style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', maxWidth: '150px' }}>Monitoreo y mejora continua</p>
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
                        background: 'var(--color-brand-blue)',
                        zIndex: -1,
                        borderRadius: '50%',
                        opacity: 0.15,
                        filter: 'blur(30px)'
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
