
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
                        ¿Para Quién es <span className="text-brand-blue">Nova Marketing Lab</span>?
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        width: '100%'
                    }}>
                        {[
                            "Startups y emprendimientos que buscan crear su marca digital desde cero con presupuestos inteligentes",
                            "PyMEs y empresas medianas que quieren profesionalizar su marketing y aumentar ventas de forma medible",
                            "Negocios en crecimiento que necesitan escalar sus estrategias con un aliado estratégico confiable",
                            "Empresas establecidas buscando innovar su presencia digital y mantenerse competitivas en su mercado"
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
