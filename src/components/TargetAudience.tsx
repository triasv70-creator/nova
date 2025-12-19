
import React from 'react';

export const TargetAudience: React.FC = () => {
    return (
        <section style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                        ¿Para quién es <span className="text-brand-blue">NOVA</span>?
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        width: '100%'
                    }}>
                        {[
                            "Empresas de productos o servicios que buscan crecer en digital.",
                            "PyMEs y emprendedores que quieren resultados sin desperdiciar presupuesto.",
                            "Marcas que necesitan orden, estrategia y medición.",
                            "Negocios que entienden que marketing es inversión, no gasto."
                        ].map((item, index) => (
                            <div key={index} style={{
                                padding: '1.5rem',
                                borderLeft: '4px solid var(--color-accent-cyan)',
                                backgroundColor: 'var(--bg-secondary)',
                                textAlign: 'left',
                                borderRadius: '0 4px 4px 0'
                            }}>
                                <p style={{ fontWeight: 500, color: 'var(--color-text-main)' }}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
