
import React, { useState } from 'react';
import { Download, CheckCircle2, X, Sparkles, Zap, BarChart3 } from 'lucide-react';

export const BlueprintSection: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
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

    const features = [
        {
            icon: <Sparkles size={28} />,
            title: "Oferta Irresistible",
            desc: "Los 3 pilares para que tu oferta sea imposible de ignorar.",
            color: "#6366F1"
        },
        {
            icon: <Zap size={28} />,
            title: "Embudo Optimizado",
            desc: "Configuración exacta para no perder dinero en anuncios.",
            color: "#F59E0B"
        },
        {
            icon: <BarChart3 size={28} />,
            title: "Métricas Reales",
            desc: "Lo que sí importa y lo que debes ignorar para siempre.",
            color: "#10B981"
        }
    ];

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
            {/* Minimalist Grid Pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.15,
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        backgroundColor: 'rgba(41, 98, 255, 0.08)',
                        color: 'var(--color-brand-blue)',
                        padding: '0.4rem 1rem',
                        borderRadius: '100px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase'
                    }}>
                        Recurso Gratuito
                    </div>

                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
                        marginBottom: '1.5rem',
                        lineHeight: '1.05',
                        color: '#0F172A',
                        fontWeight: 800
                    }}>
                        ¿Listo para dejar de <span className="text-brand-blue">adivinar</span>?
                    </h2>

                    <p style={{
                        fontSize: '1.2rem',
                        color: '#64748B',
                        marginBottom: '4rem',
                        maxWidth: '800px',
                        lineHeight: '1.6'
                    }}>
                        Descarga el <strong>Blueprint de Escalamiento</strong>: la metodología científica que aplicamos en el laboratorio para auditar, optimizar y escalar marcas.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2.5rem',
                        width: '100%',
                        marginBottom: '5rem'
                    }}>
                        {features.map((f, i) => (
                            <div key={i} className="hover-lift" style={{
                                padding: '3rem 2rem',
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem',
                                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(226, 232, 240, 0.5)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}>
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    backgroundColor: `${f.color}10`,
                                    color: f.color,
                                    borderRadius: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {f.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.75rem', fontWeight: 700 }}>{f.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: '1.5' }}>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {!showForm ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                            <button
                                onClick={() => setShowForm(true)}
                                className="hover-lift"
                                style={{
                                    padding: '1.5rem 3.5rem',
                                    background: '#0F172A',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '12px',
                                    fontSize: '1.2rem',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.3)'
                                }}
                            >
                                <Download size={22} />
                                DESCARGAR MI BLUEPRINT
                            </button>
                            <p style={{ fontSize: '0.9rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle2 size={16} /> Únete a +150 dueños de marcas que ya escalan.
                            </p>
                        </div>
                    ) : (
                        <div className="animate-up" style={{
                            backgroundColor: 'white',
                            padding: '3rem',
                            borderRadius: '24px',
                            boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)',
                            width: '100%',
                            maxWidth: '550px',
                            position: 'relative',
                            border: '1px solid #E2E8F0',
                            textAlign: 'left'
                        }}>
                            <button
                                onClick={() => setShowForm(false)}
                                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#F1F5F9', border: 'none', cursor: 'pointer', color: '#64748B', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <X size={18} />
                            </button>

                            {status === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✨</div>
                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#0F172A' }}>¡Enviado con éxito!</h3>
                                    <p style={{ color: '#64748B', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                        Tu metodología de escalamiento ya está volando hacia tu correo. Revisa tu bandeja en 2 minutos.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                        <h3 style={{ fontSize: '1.8rem', color: '#0F172A', marginBottom: '0.5rem' }}>Casi listo...</h3>
                                        <p style={{ color: '#64748B' }}>Ingresa tus datos para recibir el acceso instantáneo.</p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        <input type="text" name="name" placeholder="Tu nombre" required style={{
                                            padding: '1.2rem', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '1rem', backgroundColor: '#F8FAFC'
                                        }} />
                                        <input type="email" name="email" placeholder="tu@email.com" required style={{
                                            padding: '1.2rem', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '1rem', backgroundColor: '#F8FAFC'
                                        }} />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        style={{
                                            padding: '1.2rem',
                                            backgroundColor: status === 'submitting' ? '#94A3B8' : 'var(--color-brand-blue)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontWeight: 700,
                                            fontSize: '1.1rem',
                                            cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                            marginTop: '0.5rem',
                                            boxShadow: '0 10px 20px rgba(41, 98, 255, 0.2)'
                                        }}
                                    >
                                        {status === 'submitting' ? 'GENERANDO ACCESO...' : 'DESCARGAR AHORA'}
                                    </button>
                                    {status === 'error' && (
                                        <p style={{ color: '#EF4444', fontSize: '0.9rem', textAlign: 'center' }}>Error en la conexión. Inténtalo de nuevo.</p>
                                    )}
                                </form>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
