
import React from 'react';

const services = [
    {
        emoji: '🎨',
        title: 'Contenido Digital',
        features: ['Animación para redes', 'Fotografía y Video', 'Producción alineada a marca']
    },
    {
        emoji: '📲',
        title: 'Publicidad Digital',
        features: ['Meta Ads & TikTok Business', 'Optimización de Campañas', 'Foco en Tráfico y Conversión']
    },
    {
        emoji: '🔁',
        title: 'Leads y Gestión',
        features: ['Generación de Leads', 'Integración CRM (HubSpot)', 'Automatización de Ventas']
    },
    {
        emoji: '🗣',
        title: 'Community Management',
        features: ['Redacción Estratégica', 'Planificación de Contenido', 'Reportes de Desempeño']
    },
    {
        emoji: '🌐',
        title: 'Desarrollo Web',
        features: ['Diseño UX/UI', 'Sitios de Alta Conversión', 'Coherencia Visual']
    }
];

export const Services: React.FC = () => {
    return (
        <section id="services" style={{ padding: 'var(--spacing-section) 0', position: 'relative', overflow: 'hidden' }}>
            {/* Abstract Background Element (Tech/Lab Feel) */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="animate-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        ¿Qué hacemos?
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Trabajamos como un laboratorio creativo y estratégico que transforma ideas en acciones digitales efectivas.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((s, i) => (
                        <div key={i} className="glass-panel hover-lift animate-up" style={{
                            padding: '2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            animationDelay: `${i * 0.1 + 0.2}s` // Staggered animation
                        }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{s.emoji}</div>
                            <h3 style={{
                                color: 'var(--color-brand-blue)',
                                fontSize: '1.5rem',
                                letterSpacing: '-0.02em'
                            }}>
                                {s.title}
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                                {s.features.map((f, j) => (
                                    <li key={j} style={{
                                        marginBottom: '0.5rem',
                                        color: 'var(--color-text-muted)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        fontSize: '0.95rem'
                                    }}>
                                        <span style={{ color: 'var(--color-accent-lime)', fontWeight: 'bold' }}>•</span> {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
