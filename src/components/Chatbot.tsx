
import React, { useState, useRef, useEffect } from 'react';

type Message = {
    id: string;
    type: 'bot' | 'user';
    text: string;
    options?: { label: string; action: string }[];
};

const initialMessages: Message[] = [
    {
        id: '1',
        type: 'bot',
        text: 'Hola 👋 Bienvenido a NOVA Marketing Lab. Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
        options: [
            { label: '🎨 Contenido Digital', action: 'service_content' },
            { label: '📲 Publicidad (Ads)', action: 'service_ads' },
            { label: '🌐 Desarrollo Web', action: 'service_web' },
            { label: '💬 Hablar con un humano', action: 'whatsapp' },
        ]
    }
];

export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleOptionClick = (action: string, label: string) => {
        // Add user selection
        const userMsg: Message = { id: Date.now().toString(), type: 'user', text: label };
        setMessages(prev => [...prev, userMsg]);

        // Bot response logic
        setTimeout(() => {
            let botResponse: Message;

            switch (action) {
                case 'service_content':
                    botResponse = {
                        id: Date.now().toString() + 'b',
                        type: 'bot',
                        text: 'En nuestro laboratorio creamos contenido animado, fotografía y video estratégico alineado a tu marca. ¿Te gustaría ver ejemplos o cotizar?',
                        options: [
                            { label: 'Ver Portafolio (Web)', action: 'link_portfolio' },
                            { label: 'Cotizar en WhatsApp', action: 'whatsapp' },
                            { label: 'Volver al menú', action: 'reset' }
                        ]
                    };
                    break;
                case 'service_ads':
                    botResponse = {
                        id: Date.now().toString() + 'b',
                        type: 'bot',
                        text: 'Maximizamos tu ROI con campañas en Meta Ads y TikTok. Nos enfocamos en conversión, no solo likes.',
                        options: [
                            { label: 'Quiero escalar ventas', action: 'whatsapp' },
                            { label: 'Volver al menú', action: 'reset' }
                        ]
                    };
                    break;
                case 'service_web':
                    botResponse = {
                        id: Date.now().toString() + 'b',
                        type: 'bot',
                        text: 'Desarrollamos sitios web de alto rendimiento y diseño "Antigravity". Velocidad y conversión aseguradas.',
                        options: [
                            { label: 'Cotizar mi web', action: 'whatsapp' },
                            { label: 'Volver al menú', action: 'reset' }
                        ]
                    };
                    break;
                case 'whatsapp':
                    window.open('https://wa.me/1234567890', '_blank'); // Replace with real number
                    botResponse = {
                        id: Date.now().toString() + 'b',
                        type: 'bot',
                        text: '¡Genial! Te estoy redirigiendo a WhatsApp para hablar con un especialista...',
                        options: [{ label: 'Volver al menú', action: 'reset' }]
                    };
                    break;
                case 'reset':
                    botResponse = initialMessages[0];
                    // Determine if we want to clear history or just append. Appending for conversational flow.
                    botResponse = { ...initialMessages[0], id: Date.now().toString() + 'b' };
                    break;
                default:
                    botResponse = {
                        id: Date.now().toString() + 'b',
                        type: 'bot',
                        text: 'Entendido. ¿Hay algo más en lo que pueda ayudarte?',
                        options: initialMessages[0].options
                    };
            }
            setMessages(prev => [...prev, botResponse]);
        }, 600);
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            fontFamily: 'var(--font-body)'
        }}>
            {/* Chat Window */}
            {isOpen && (
                <div className="animate-up" style={{
                    width: '320px',
                    height: '450px',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid rgba(41, 98, 255, 0.1)'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '1rem',
                        backgroundColor: 'var(--color-brand-blue)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: 'var(--color-accent-lime)', borderRadius: '50%' }}></div>
                        <span style={{ fontWeight: 600 }}>Nova Assistant</span>
                    </div>

                    {/* Messages Area */}
                    <div style={{
                        flex: 1,
                        padding: '1rem',
                        overflowY: 'auto',
                        backgroundColor: '#F9FAFB',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        {messages.map((msg) => (
                            <div key={msg.id} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: msg.type === 'bot' ? 'flex-start' : 'flex-end',
                                gap: '0.5rem'
                            }}>
                                <div style={{
                                    padding: '0.8rem 1rem',
                                    borderRadius: msg.type === 'bot' ? '0 12px 12px 12px' : '12px 12px 0 12px',
                                    backgroundColor: msg.type === 'bot' ? 'white' : 'var(--color-brand-blue)',
                                    color: msg.type === 'bot' ? 'var(--color-text-main)' : 'white',
                                    maxWidth: '85%',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    fontSize: '0.9rem',
                                    border: msg.type === 'bot' ? '1px solid #E5E7EB' : 'none'
                                }}>
                                    {msg.text}
                                </div>

                                {msg.options && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {msg.options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(opt.action, opt.label)}
                                                className="hover-lift"
                                                style={{
                                                    padding: '0.5rem 1rem',
                                                    backgroundColor: 'white',
                                                    border: '1px solid var(--color-brand-blue)',
                                                    color: 'var(--color-brand-blue)',
                                                    borderRadius: '20px',
                                                    fontSize: '0.8rem',
                                                    cursor: 'pointer',
                                                    fontWeight: 500
                                                }}
                                            >
                                                {opt.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover-lift"
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-brand-blue)',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(41, 98, 255, 0.3)',
                    color: 'white',
                    fontSize: '1.5rem'
                }}
            >
                {isOpen ? '✕' : '💬'}
            </button>
        </div>
    );
};
