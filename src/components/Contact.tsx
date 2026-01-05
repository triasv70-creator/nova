
import React from 'react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" style={{ padding: 'var(--spacing-section) 0', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    ¿Listo para escalar tu <span className="text-brand-blue">Marketing Digital</span>?
                </h2>
                <p style={{ marginBottom: '2.5rem', color: 'var(--color-text-muted)' }}>
                    Conversemos y diseñemos una estrategia hecha a la medida de tu negocio.
                </p>

                <form
                    action="https://formsubmit.co/adrian@novamktlab.com"
                    method="POST"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '4px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}
                >
                    {/* Form Settings */}
                    <input type="hidden" name="_subject" value="Nueva Solicitud de Propuesta - Nova Marketing Lab" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />

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

                    <button type="submit" className="hover-lift" style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        background: 'linear-gradient(to right, var(--color-brand-blue), var(--color-accent-blue))',
                        backgroundColor: 'var(--color-brand-blue)',
                        color: 'white',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: 'var(--font-brand)',
                        letterSpacing: '0.05em'
                    }}>
                        SOLICITAR PROPUESTA
                    </button>
                </form>

                <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        📧 hola@novamarketinglab.com
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                        📱 WhatsApp Directo
                    </span>
                </div>
            </div>
        </section>
    );
};
