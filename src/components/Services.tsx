
import React from 'react';
import { MonitorPlay, Target, Workflow, Users2, Globe } from 'lucide-react';

const services = [
    {
        icon: MonitorPlay,
        title: 'Contenido Digital',
        description: 'Creamos activos visuales de alto impacto diseñados para capturar la atención y proyectar la esencia única de tu marca.'
    },
    {
        icon: Target,
        title: 'Publicidad Digital',
        description: 'Estrategias de pauta basadas en datos para maximizar tu retorno de inversión con optimización científica constante.'
    },
    {
        icon: Workflow,
        title: 'Leads y Gestión',
        description: 'Sistemas automatizados para capturar prospectos calificados y sincronizarlos con tu CRM para orquestar tus ventas.'
    },
    {
        icon: Users2,
        title: 'Community Management',
        description: 'Construimos comunidades digitales activas a través de narrativa estratégica que genera lealtad y conversión.'
    },
    {
        icon: Globe,
        title: 'Desarrollo Web',
        description: 'Experiencias digitales de alta conversión que fusionan diseño de vanguardia con un rendimiento técnico impecable.'
    }
];

export const Services: React.FC = () => {
    return (
        <section id="services" style={{ padding: 'var(--spacing-section) 0', backgroundColor: '#FDFDFD' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{
                        color: 'var(--color-brand-blue)',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        marginBottom: '1rem'
                    }}>
                        Nuestras Capacidades
                    </div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0F172A', fontWeight: 800 }}>
                        Ciencia aplicada al <span className="text-brand-blue">Marketing</span>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-card-interactive">
                            <div className="card-content">
                                <div className="icon-wrapper">
                                    <s.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="service-title">{s.title}</h3>
                                <div className="description-container">
                                    <p className="service-description">{s.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .services-grid {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 1rem;
                }

                .service-card-interactive {
                    background: white;
                    border: 1px solid #F1F5F9;
                    border-radius: 20px;
                    padding: 2.5rem 1rem;
                    height: 280px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: default;
                    overflow: hidden;
                }

                .card-content {
                    display: flex;
                    flex-direction: column;
                    alignItems: center;
                    gap: 1.25rem;
                    transition: all 0.4s ease;
                    width: 100%;
                }

                .icon-wrapper {
                    color: var(--color-brand-blue);
                    background: #F8FAFC;
                    width: 64px;
                    height: 64px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 16px;
                    margin: 0 auto;
                    transition: all 0.4s ease;
                }

                .service-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #0F172A;
                    margin: 0;
                    line-height: 1.3;
                    transition: all 0.4s ease;
                }

                .description-container {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .service-description {
                    font-size: 0.85rem;
                    color: #64748B;
                    line-height: 1.5;
                    margin-top: 1rem;
                }

                /* Hover States */
                .service-card-interactive:hover {
                    border-color: rgba(41, 98, 255, 0.2);
                    box-shadow: 0 20px 40px -10px rgba(41, 98, 255, 0.1);
                    height: 320px;
                }

                .service-card-interactive:hover .icon-wrapper {
                    background: var(--color-brand-blue);
                    color: white;
                    transform: scale(0.9);
                }

                .service-card-interactive:hover .description-container {
                    max-height: 120px;
                    opacity: 1;
                }

                @media (max-width: 1200px) {
                    .services-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                    }
                    .service-card-interactive {
                        height: auto !important;
                        padding: 2rem;
                    }
                    .description-container {
                        max-height: none;
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
};
