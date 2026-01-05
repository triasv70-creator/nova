
import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

export const BlueprintSection: React.FC = () => {
    return (
        <section style={{
            padding: 'var(--spacing-section) 0',
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            color: 'var(--color-text-main)',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid #E2E8F0',
            borderBottom: '1px solid #E2E8F0'
        }}>
            {/* Subtle tech background pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(var(--color-brand-blue) 0.5px, transparent 0.5px)',
                backgroundSize: '30px 30px',
                opacity: 0.03,
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
                        fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        color: '#0F172A'
                    }}>
                        ¿Sientes que tu negocio está <span className="text-brand-blue">estancado</span> o no sabes por dónde empezar?
                    </h2>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '3.5rem',
                        maxWidth: '800px',
                        lineHeight: '1.6'
                    }}>
                        No lances campañas a ciegas. Descarga nuestro <strong>"Blueprint de Escalamiento Nova"</strong>: la hoja de ruta exacta que utilizamos para auditar, optimizar y escalar marcas digitalmente.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        width: '100%',
                        marginBottom: '4rem',
                        textAlign: 'left'
                    }}>
                        {[
                            "Los 3 pilares para que tu oferta sea irresistible.",
                            "Cómo configurar tu embudo para no perder dinero en anuncios.",
                            "Métricas que sí importan (y cuáles ignorar para siempre)."
                        ].map((point, i) => (
                            <div key={i} className="hover-lift" style={{
                                padding: '2rem',
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.25rem',
                                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                                border: '1px solid #F1F5F9'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: 'rgba(41, 98, 255, 0.05)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <CheckCircle2 size={24} style={{ color: 'var(--color-brand-blue)' }} />
                                </div>
                                <p style={{ fontSize: '1.05rem', fontWeight: 500, color: '#334155', lineHeight: '1.5' }}>{point}</p>
                            </div>
                        ))}
                    </div>

                    <button className="hover-lift" style={{
                        padding: '1.4rem 3rem',
                        background: 'linear-gradient(135deg, var(--color-brand-blue) 0%, var(--color-accent-blue, #1E40AF) 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-brand)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        cursor: 'pointer',
                        boxShadow: '0 20px 40px -10px rgba(41, 98, 255, 0.3)',
                        letterSpacing: '0.02em'
                    }}>
                        <Download size={22} />
                        ¡DESCARGAR BLUEPRINT GRATIS!
                    </button>

                    <div style={{
                        marginTop: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: '#F1F5F9',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '50px'
                    }}>
                        <div style={{ display: 'flex', marginLeft: '5px' }}>
                            {[1, 2, 3].map(i => (
                                <div key={i} style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: '#CBD5E1',
                                    border: '2px solid white',
                                    marginLeft: '-8px'
                                }}></div>
                            ))}
                        </div>
                        <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748B' }}>
                            +150 dueños de negocio ya lo están usando
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
