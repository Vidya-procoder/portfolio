import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ roles }) => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setText(currentRole.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(currentRole.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, roles, typingSpeed]);

    return (
        <span style={{ display: 'inline-block' }}>
            {text}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    background: '#94a3b8',
                    marginLeft: '5px',
                    verticalAlign: 'middle'
                }}
            />
        </span>
    );
};

export default TypewriterText;
