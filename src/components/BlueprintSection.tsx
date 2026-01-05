
import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

export const BlueprintSection: React.FC = () => {
    return (
        <section style={{
            padding: 'var(--spacing-section) 0',
            backgroundColor: '#0F172A',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle glow effect */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '-10%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(41, 98, 255, 0.1) 0%, transparent 70%)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.2'
                    }}>
                        ¿Tu negocio está <span className="text-brand-blue">estancado</span> o no sabes por dónde empezar a invertir?
                    </h2>

                    <p style={{
                        fontSize: '1.2rem',
                        opacity: 0.9,
                        marginBottom: '3rem',
                        maxWidth: '750px'
                    }}>
                        No lances campañas a ciegas. Descarga nuestro <strong>"Blueprint de Escalamiento Nova"</strong>: la hoja de ruta exacta que utilizamos en el laboratorio para auditar, optimizar y escalar marcas digitalmente.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        width: '100%',
                        marginBottom: '3.5rem',
                        textAlign: 'left'
                    }}>
                        {[
                            "Los 3 pilares para que tu oferta sea irresistible.",
                            "Cómo configurar tu embudo para no perder dinero en anuncios.",
                            "Métricas que sí importan (y cuáles ignorar para siempre)."
                        ].map((point, i) => (
                            <div key={i} className="glass-panel" style={{
                                padding: '1.5rem',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'flex-start'
                            }}>
                                <CheckCircle2 size={24} style={{ color: 'var(--color-accent-lime)', flexShrink: 0 }} />
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{point}</p>
                            </div>
                        ))}
                    </div>

                    <button className="hover-lift" style={{
                        padding: '1.25rem 2.5rem',
                        backgroundColor: 'var(--color-brand-blue)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-brand)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        boxShadow: '0 10px 20px -5px rgba(41, 98, 255, 0.4)'
                    }}>
                        <Download size={20} />
                        ¡DESCARGAR EL BLUEPRINT GRATIS!
                    </button>

                    <p style={{
                        marginTop: '2rem',
                        fontSize: '0.9rem',
                        opacity: 0.6,
                        fontStyle: 'italic'
                    }}>
                        Únete a más de 150 dueños de negocio que ya están optimizando su estrategia.
                    </p>
                </div>
            </div>
        </section>
    );
};
