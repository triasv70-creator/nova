import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/ac5eb6254b7ad1a0cfa85830fda84cd9", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: "🚀 Nueva Solicitud de Propuesta - Nova Marketing Lab"
                })
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    ¿Listo para escalar tu <span className="text-brand-blue">Marketing Digital</span>?
                </h2>
                <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-muted)' }}>
                    {status === 'success'
                        ? '¡Gracias por tu interés!'
                        : 'Conversemos y diseñemos una estrategia hecha a la medida de tu negocio.'}
                </p>

                {status === 'success' ? (
                    <div className="animate-up" style={{
                        backgroundColor: 'white',
                        padding: '3rem',
                        borderRadius: '4px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        borderTop: '4px solid var(--color-brand-blue)'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                        <h3 style={{ marginBottom: '1rem' }}>¡Solicitud Enviada!</h3>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                            Hemos recibido tu información correctamente. Un especialista de **NOVA Marketing Lab** se pondrá en contacto contigo en breve para agendar tu asesoría.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            style={{
                                marginTop: '2rem',
                                background: 'none',
                                border: 'none',
                                color: 'var(--color-brand-blue)',
                                fontWeight: 700,
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            Enviar otra solicitud
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '4px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}>
                        <input type="text" name="name" placeholder="Tu Nombre o Empresa" required style={{
                            padding: '1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '2px',
                            fontFamily: 'var(--font-body)'
                        }} />
                        <input type="email" name="email" placeholder="Tu Email Corporativo" required style={{
                            padding: '1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '2px',
                            fontFamily: 'var(--font-body)'
                        }} />
                        <textarea name="message" placeholder="Cuéntanos brevemente tus objetivos..." rows={5} required style={{
                            padding: '1rem',
                            border: '1px solid #e5e7eb',
                            borderRadius: '2px',
                            fontFamily: 'var(--font-body)'
                        }}></textarea>

                        <button
                            type="submit"
                            className="hover-lift"
                            disabled={status === 'submitting'}
                            style={{
                                marginTop: '1rem',
                                padding: '1rem',
                                background: status === 'submitting' ? '#cbd5e1' : 'linear-gradient(to right, var(--color-brand-blue), var(--color-accent-blue))',
                                backgroundColor: 'var(--color-brand-blue)',
                                color: 'white',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: 700,
                                cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                                fontFamily: 'var(--font-brand)',
                                letterSpacing: '0.05em'
                            }}
                        >
                            {status === 'submitting' ? 'ENVIANDO...' : 'SOLICITAR PROPUESTA'}
                        </button>
                        {status === 'error' && (
                            <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '1rem' }}>
                                Hubo un error al enviar. Por favor, inténtalo de nuevo o escríbenos por WhatsApp.
                            </p>
                        )}
                    </form>
                )}

                <div className="contact-links" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        📧 hola@novamarketinglab.com
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        📱 WhatsApp Directo
                    </span>
                </div>

                <style>{`
                    @media (max-width: 768px) {
                        .contact-links {
                            flex-direction: column !important;
                            gap: 1rem !important;
                            align-items: center;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
};
