
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

            <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 900,
                color: 'var(--color-text-main)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
            }}>
                Impulsamos el Crecimiento de tu Negocio con <span className="text-brand-blue">Estrategias de Marketing Digital</span> Hechas a tu Medida
            </h1>

            <p style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-muted)',
                maxWidth: '800px',
                margin: '0 auto 2.5rem',
                fontWeight: 400
            }}>
                En <strong>NOVA MARKETING LAB</strong> diseñamos soluciones personalizadas que se adaptan a tu presupuesto y etapa de crecimiento. Sin paquetes rígidos. Sin servicios innecesarios. Solo estrategias que generan resultados reales en marca y ventas.
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
                        Solicita tu Propuesta Personalizada
                    </button>
                </a>

                <a href="#que-hacemos" style={{ textDecoration: 'none' }}>
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
                        Qué Hacemos
                    </button>
                </a>
            </div>
        </section>
    );
};
