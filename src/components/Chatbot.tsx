
import React, { useState, useRef, useEffect } from 'react';

type Message = {
    id: string;
    type: 'bot' | 'user';
    text: string;
    options?: { label: string; action: string }[];
};

type LeadData = {
    name?: string;
    contact?: string;
    service?: string;
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
    const [messages, setMessages] = useState<Message[]>(() => {
        const saved = localStorage.getItem('nova_chat_messages');
        return saved ? JSON.parse(saved) : initialMessages;
    });
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [leadStep, setLeadStep] = useState<'selection' | 'name' | 'contact' | 'finished'>('selection');
    const [leadData, setLeadData] = useState<LeadData>(() => {
        const saved = localStorage.getItem('nova_lead_data');
        return saved ? JSON.parse(saved) : {};
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        localStorage.setItem('nova_chat_messages', JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        localStorage.setItem('nova_lead_data', JSON.stringify(leadData));
    }, [leadData]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const addBotMessage = (text: string, options?: { label: string; action: string }[]) => {
        setIsTyping(true);
        setTimeout(() => {
            const botMsg: Message = {
                id: Date.now().toString() + 'b',
                type: 'bot',
                text,
                options
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    const handleOptionClick = (action: string, label: string) => {
        const userMsg: Message = { id: Date.now().toString(), type: 'user', text: label };
        setMessages(prev => [...prev, userMsg]);

        if (action.startsWith('service_')) {
            setLeadData(prev => ({ ...prev, service: label }));
            setLeadStep('name');
            addBotMessage(`¡Excelente elección! Me encantaría ayudarte con ${label.toLowerCase()}. Para empezar, ¿cómo te llamas?`);
        } else if (action === 'whatsapp') {
            setLeadData(prev => ({ ...prev, service: 'WhatsApp Direct' }));
            setLeadStep('name');
            addBotMessage('¡Claro! Te pondré en contacto con un humano. Primero, ¿podrías decirme tu nombre?');
        } else if (action === 'reset') {
            setMessages(initialMessages);
            setLeadStep('selection');
            setLeadData({});
            localStorage.removeItem('nova_chat_messages');
            localStorage.removeItem('nova_lead_data');
        } else if (action === 'link_portfolio') {
            window.open('#services', '_self');
            addBotMessage('Aquí puedes ver algunos de nuestros trabajos. ¿Qué te parece?');
        }
    };

    const handleSendText = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!userInput.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), type: 'user', text: userInput };
        setMessages(prev => [...prev, userMsg]);
        const currentInput = userInput;
        setUserInput('');

        if (leadStep === 'name') {
            setLeadData(prev => ({ ...prev, name: currentInput }));
            setLeadStep('contact');
            addBotMessage(`Mucho gusto, ${currentInput}. 👋 ¿A qué email o WhatsApp podemos enviarte la propuesta?`);
        } else if (leadStep === 'contact') {
            const finalLeadData = { ...leadData, contact: currentInput };
            setLeadData(finalLeadData);
            setLeadStep('finished');

            // Automate Email Notification
            fetch("https://formsubmit.co/ajax/contacto@novamktlab.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nombre: finalLeadData.name,
                    Contacto: finalLeadData.contact,
                    Servicio: finalLeadData.service,
                    _subject: "🚀 Nuevo Lead de Chatbot - Nova Marketing Lab"
                })
            }).catch(err => console.error("Error sending lead email:", err));

            // Meta Pixel Lead Event
            if ((window as any).fbq) {
                (window as any).fbq('track', 'Lead', {
                    content_name: finalLeadData.service,
                    value: 0,
                    currency: 'USD'
                });
            }

            addBotMessage('¡Recibido! 🚀 Un especialista de NOVA Marketing Lab se pondrá en contacto contigo en menos de 24 horas. ¿Te gustaría adelantarte y escribirnos por WhatsApp ahora?', [
                { label: '📲 Ir a WhatsApp Ahora', action: 'direct_wa' },
                { label: 'Volver a empezar', action: 'reset' }
            ]);
        } else if (action_is_direct_wa(currentInput)) {
            // Standard response for non-lead messages
            addBotMessage('Entendido. ¿Hay algo más en lo que pueda ayudarte?');
        }
    };

    const action_is_direct_wa = (_text: string) => false; // Dummy for now

    // Update the handleOptionClick for the final WA redirect
    const originalHandleOptionClick = handleOptionClick;
    const enhancedHandleOptionClick = (action: string, label: string) => {
        if (action === 'direct_wa') {
            const userMsg: Message = { id: Date.now().toString(), type: 'user', text: label };
            setMessages(prev => [...prev, userMsg]);
            window.open('https://wa.me/1234567890', '_blank');
            addBotMessage('Te estoy redirigiendo...');
            return;
        }
        originalHandleOptionClick(action, label);
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
                                                onClick={() => enhancedHandleOptionClick(opt.action, opt.label)}
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
                        {isTyping && (
                            <div style={{ display: 'flex', gap: '4px', padding: '0.5rem 1rem' }}>
                                <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#9ca3af', borderRadius: '50%', animation: 'bounce 1s infinite 0.1s' }}></div>
                                <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#9ca3af', borderRadius: '50%', animation: 'bounce 1s infinite 0.2s' }}></div>
                                <div className="typing-dot" style={{ width: '6px', height: '6px', background: '#9ca3af', borderRadius: '50%', animation: 'bounce 1s infinite 0.3s' }}></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendText} style={{
                        padding: '0.8rem',
                        borderTop: '1px solid #E5E7EB',
                        backgroundColor: 'white',
                        display: 'flex',
                        gap: '0.5rem'
                    }}>
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Escribe tu mensaje..."
                            style={{
                                flex: 1,
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                                padding: '0.5rem 0.8rem',
                                fontSize: '0.9rem',
                                outline: 'none'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                backgroundColor: 'var(--color-brand-blue)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                width: '36px',
                                height: '36px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            🚀
                        </button>
                    </form>
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
