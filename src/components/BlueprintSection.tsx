import React, { useState } from 'react';
import { Download, CheckCircle2, Sparkles, Zap, BarChart3 } from 'lucide-react';

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
        { icon: <Sparkles size={16} />, text: "Oferta Irresistible" },
        { icon: <Zap size={16} />, text: "Embudo Optimizado" },
        { icon: <BarChart3 size={16} />, text: "Métricas Reales" }
    ];

    return (
        <section style={{
            padding: '4rem 0',
            background: 'white',
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
                    {/* Simplified Header */}
                    <div>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                            color: '#0F172A',
                            fontWeight: 800,
                            marginBottom: '0.75rem'
                        }}>
                            Descarga el <span className="text-brand-blue">Blueprint</span> de Escalamiento Nova
                        </h2>
                        <div style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            opacity: 0.6
                        }}>
                            {miniFeatures.map((f, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                                    {f.icon} {f.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Single-Line Form */}
                    {status === 'success' ? (
                        <div className="animate-up" style={{
                            backgroundColor: '#F0FDF4',
                            padding: '1rem 2rem',
                            borderRadius: '100px',
                            border: '1px solid #BBF7D0',
                            color: '#166534',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem'
                        }}>
                            <CheckCircle2 size={20} /> ¡Blueprint enviado! Revisa tu correo ahora mismo.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="blueprint-form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                required
                                style={{
                                    flex: 1,
                                    padding: '1rem 1.5rem',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    backgroundColor: '#F8FAFC',
                                    outline: 'none',
                                    minWidth: '200px'
                                }}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="tu@email.com"
                                required
                                style={{
                                    flex: 1,
                                    padding: '1rem 1.5rem',
                                    border: '1px solid #E2E8F0',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    backgroundColor: '#F8FAFC',
                                    outline: 'none',
                                    minWidth: '200px'
                                }}
                            />
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="hover-lift"
                                style={{
                                    padding: '1rem 2rem',
                                    backgroundColor: status === 'submitting' ? '#94A3B8' : 'var(--color-brand-blue)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    boxShadow: '0 10px 20px rgba(41, 98, 255, 0.2)',
                                    transition: 'all 0.3s ease',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <Download size={18} />
                                {status === 'submitting' ? 'ENVIANDO...' : 'DESCARGAR GRATIS'}
                            </button>
                        </form>
                    )}

                    <p style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 500 }}>
                        Únete a +150 dueños de marcas que ya escalan con nosotros.
                    </p>
                </div>
            </div>

            <style>{`
                .blueprint-form-row {
                    display: flex;
                    gap: 1rem;
                    width: 100%;
                    max-width: 850px;
                    background: white;
                    padding: 0.75rem;
                    border-radius: '20px';
                    transition: all 0.3s ease;
                }
                @media (max-width: 768px) {
                    .blueprint-form-row {
                        flex-direction: column;
                        padding: 0;
                    }
                    .blueprint-form-row input, .blueprint-form-row button {
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};
