import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '140px 1.5rem 80px',
            background: 'radial-gradient(circle at 70% 30%, #0E43E7 0%, #021238 80%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Grain/Noise Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.15,
                pointerEvents: 'none',
                mixBlendMode: 'overlay',
                background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                zIndex: 1
            }} />

            {/* Visual background elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(79, 238, 242, 0.1) 0%, transparent 70%)',
                filter: 'blur(100px)',
                zIndex: 0
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
                <h1 style={{
                    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                    fontWeight: 800, // Using Bold as per manual
                    color: 'var(--color-text-light)',
                    lineHeight: 1.05,
                    marginBottom: '2rem',
                    letterSpacing: '-0.02em',
                    fontFamily: 'var(--font-brand)',
                    textShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}>
                    Ingeniería de Resultados <br />
                    <span style={{
                        color: 'white',
                        textShadow: '0 0 200px rgba(79, 238, 242, 0.4)'
                    }}>para tu Ecosistema Digital.</span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    color: 'white',
                    maxWidth: '850px',
                    margin: '0 auto 3.5rem',
                    fontWeight: 500,
                    lineHeight: 1.6,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    En <strong>NOVA Marketing Lab</strong>, fusionamos arquitectura tecnológica y creatividad estratégica para transformar marcas en ecosistemas de adquisición de clientes y resultados reales.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#contact" style={{ textDecoration: 'none' }}>
                        <button className="hover-lift" style={{
                            padding: '1.1rem 2.5rem',
                            backgroundColor: 'var(--color-brand-blue)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1.05rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-brand)',
                            cursor: 'pointer',
                            boxShadow: '0 8px 16px rgba(14, 67, 231, 0.2)'
                        }}>
                            Agendar Propuesta
                        </button>
                    </a>

                    <a href="#about" style={{ textDecoration: 'none' }}>
                        <button className="hover-lift" style={{
                            padding: '1.1rem 2.5rem',
                            backgroundColor: 'rgba(250, 250, 250, 0.05)',
                            color: 'var(--color-text-light)',
                            border: '1px solid rgba(250, 250, 250, 0.2)',
                            borderRadius: '8px',
                            fontSize: '1.05rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-brand)',
                            cursor: 'pointer',
                            backdropFilter: 'blur(4px)'
                        }}>
                            Conócenos
                        </button>
                    </a>
                </div>
            </div>

            <style>{`
                /* Hero Text Shadow & Polish */
                h1, p {
                   text-rendering: optimizeLegibility;
                }
            `}</style>
        </section>
    );
};
