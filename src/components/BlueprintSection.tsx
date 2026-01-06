import React, { useState } from 'react';
import { Download, CheckCircle2, Sparkles, Zap, BarChart3 } from 'lucide-react';
import mockupImg from '../assets/blueprint-mockup.png';

export const BlueprintSection: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/adrian@novamktlab.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: "📥 [LEAD] Solicitud de Blueprint - Nova Marketing Lab",
                    _template: "table"
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Blueprint lead error:", error);
            setStatus('error');
        }
    };

    const miniFeatures = [
        { icon: <Sparkles size={16} />, text: "Ideas Probadas" },
        { icon: <Zap size={16} />, text: "Procesos Técnicos" },
        { icon: <BarChart3 size={16} />, text: "Métricas Clave" }
    ];

    return (
        <section style={{
            padding: '5rem 0',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
            color: 'var(--color-text-main)',
            borderTop: '1px solid #F1F5F9',
            borderBottom: '1px solid #F1F5F9'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2.5rem',
                    textAlign: 'center'
                }}>
                    {/* Header */}
                    <div style={{ maxWidth: '800px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                            color: '#0F172A',
                            fontWeight: 800,
                            marginBottom: '1rem',
                            lineHeight: '1.1'
                        }}>
                            Descarga Gratis: <span className="text-brand-blue">Blueprint de Escalamiento</span> para tu Negocio
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748B', marginBottom: '1.5rem' }}>
                            Descubre nuestra metodología paso a paso para transformar tu presencia digital y aumentar tus ventas.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '1rem'
                        }}>
                            {miniFeatures.map((f, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>
                                    <span style={{ color: 'var(--color-brand-blue)' }}>{f.icon}</span>
                                    {f.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mockup Image */}
                    <div className="animate-up" style={{
                        width: '100%',
                        maxWidth: '700px',
                        margin: '0 auto',
                        filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.12))',
                        position: 'relative'
                    }}>
                        <img
                            src={mockupImg}
                            alt="Blueprint Nova Mockup"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '12px'
                            }}
                        />
                    </div>

                    {/* Single-Line Form */}
                    <div style={{ width: '100%', maxWidth: '900px', marginTop: '1rem' }}>
                        {status === 'success' ? (
                            <div className="animate-up" style={{
                                backgroundColor: '#F0FDF4',
                                padding: '1.25rem 2.5rem',
                                borderRadius: '100px',
                                border: '1px solid #BBF7D0',
                                color: '#166534',
                                fontWeight: 700,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '1rem',
                                boxShadow: '0 10px 30px rgba(22, 101, 52, 0.1)'
                            }}>
                                <CheckCircle2 size={24} /> ¡Blueprint enviado! Revisa tu bandeja de entrada.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="blueprint-form-row-enhanced">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Tu nombre completo"
                                    required
                                    style={{
                                        flex: 2,
                                        padding: '1.1rem 1.75rem',
                                        border: '1px solid #E2E8F0',
                                        borderRadius: '16px',
                                        fontSize: '1rem',
                                        backgroundColor: 'white',
                                        outline: 'none',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                                    }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="tu@email.com"
                                    required
                                    style={{
                                        flex: 2,
                                        padding: '1.1rem 1.75rem',
                                        border: '1px solid #E2E8F0',
                                        borderRadius: '16px',
                                        fontSize: '1rem',
                                        backgroundColor: 'white',
                                        outline: 'none',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="hover-lift"
                                    style={{
                                        flex: 1,
                                        padding: '1.1rem 2.5rem',
                                        backgroundColor: status === 'submitting' ? '#94A3B8' : 'var(--color-brand-blue)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '16px',
                                        fontWeight: 800,
                                        fontSize: '1rem',
                                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.75rem',
                                        boxShadow: '0 12px 24px rgba(41, 98, 255, 0.25)',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    <Download size={20} />
                                    {status === 'submitting' ? 'PROCESANDO...' : 'Descargar Blueprint Gratis'}
                                </button>
                            </form>
                        )}
                        <p style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 600, marginTop: '2rem' }}>
                            <span style={{ color: 'var(--color-brand-blue)' }}>★ ★ ★ ★ ★</span> +150 dueños de marcas ya escalan con nosotros.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .blueprint-form-row-enhanced {
                    display: flex;
                    gap: 1.25rem;
                    width: 100%;
                    background: #F1F5F9;
                    padding: 1rem;
                    border-radius: 24px;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
                }
                @media (max-width: 850px) {
                    .blueprint-form-row-enhanced {
                        flex-direction: column;
                        background: none;
                        padding: 0;
                        gap: 1rem;
                    }
                    .blueprint-form-row-enhanced input, .blueprint-form-row-enhanced button {
                        width: 100%;
                        border-radius: 12px;
                    }
                }
            `}</style>
        </section>
    );
};
