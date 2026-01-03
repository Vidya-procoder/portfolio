import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2, Mail, Linkedin, Github, Phone } from 'lucide-react';
import PageWrapper from '../components/Layout/PageWrapper';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
        }, 2000);
    };

    return (
        <PageWrapper>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold', textAlign: 'center' }}
                >
                    Get in <span style={{ color: '#38bdf8' }}>Touch</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '3rem' }}
                >
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {[
                        { icon: Mail, label: 'Email', href: 'mailto:vidyasridhanasekaran@gmail.com', color: '#ef4444' },
                        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vidyasri-dhanasekaran-922714257/', color: '#0077b5' },
                        { icon: Github, label: 'GitHub', href: 'https://github.com/Vidya-procoder/', color: '#f8fafc' },
                        { icon: Phone, label: 'Phone', href: 'tel:+91 6374836727', color: '#22c55e' }
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: '#94a3b8',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                background: 'rgba(30, 41, 59, 0.4)',
                                padding: '1rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                width: '100px',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <item.icon size={24} style={{ color: item.color }} />
                            <span style={{ fontSize: '0.875rem' }}>{item.label}</span>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: 'rgba(30, 41, 59, 0.4)',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1' }}>Name</label>
                        <input
                            type="text"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(15, 23, 42, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                color: '#f8fafc',
                                outline: 'none',
                                fontSize: '1rem'
                            }}
                            placeholder="Smriti Vidya"
                        />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1' }}>Email</label>
                        <input
                            type="email"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(15, 23, 42, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                color: '#f8fafc',
                                outline: 'none',
                                fontSize: '1rem'
                            }}
                            placeholder="vidyasridhanasekaran@gmail.com"
                        />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: '#cbd5e1' }}>Message</label>
                        <textarea
                            required
                            rows="4"
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(15, 23, 42, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                color: '#f8fafc',
                                outline: 'none',
                                fontSize: '1rem',
                                resize: 'vertical'
                            }}
                            placeholder="Your message here..."
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={status === 'loading' || status === 'success'}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            background: status === 'success' ? '#22c55e' : '#38bdf8',
                            color: '#0f172a',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            cursor: status === 'idle' ? 'pointer' : 'default'
                        }}
                    >
                        {status === 'idle' && (
                            <>
                                Send Message <Send size={20} />
                            </>
                        )}
                        {status === 'loading' && (
                            <>
                                <Loader2 className="spin" size={20} style={{ animation: 'spin 1s linear infinite' }} /> Sending...
                            </>
                        )}
                        {status === 'success' && (
                            <>
                                Message Sent <CheckCircle size={20} />
                            </>
                        )}
                    </motion.button>
                    <style>
                        {`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
                    </style>
                </motion.form>
            </div>
        </PageWrapper>
    );
};

export default Contact;
