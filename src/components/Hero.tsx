
import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '120px 1rem 0',
            background: 'radial-gradient(circle at 50% 50%, rgba(41, 98, 255, 0.03) 0%, transparent 70%)' // Subtle lab glow
        }}>

            <div className="container" style={{ maxWidth: '900px' }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontWeight: 900,
                    color: 'var(--color-text-main)',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.02em'
                }}>
                    Impulsamos y optimizamos tu <span className="text-brand-blue">Marketing Digital</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-text-muted)',
                    maxWidth: '800px',
                    margin: '0 auto 2.5rem',
                    fontWeight: 400
                }}>
                    En <strong>NOVA MARKETING LAB</strong> no creemos en soluciones genéricas. Aprovechamos al máximo tu presupuesto enfocándonos en lo que importa: resultados visibles y ROI medible.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#contact" style={{ textDecoration: 'none' }}>
                        <button className="hover-lift" style={{
                            padding: '1rem 2rem',
                            backgroundColor: 'var(--color-brand-blue)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '2px',
                            fontSize: '1rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-brand)',
                            letterSpacing: '0.05em',
                            cursor: 'pointer'
                        }}>
                            SOLICITAR PROPUESTA
                        </button>
                    </a>

                    <a href="#services" style={{ textDecoration: 'none' }}>
                        <button className="hover-lift" style={{
                            padding: '1rem 2rem',
                            backgroundColor: 'transparent',
                            color: 'var(--color-text-main)',
                            border: '2px solid #E5E7EB',
                            borderRadius: '2px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-brand)',
                            cursor: 'pointer'
                        }}>
                            VER SERVICIOS
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};
