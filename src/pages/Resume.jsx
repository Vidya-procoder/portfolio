import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import PageWrapper from '../components/Layout/PageWrapper';

const Resume = () => {
    return (
        <PageWrapper>
            <div style={{ maxWidth: '300px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 'bold' }}
                >
                    My <span style={{ color: '#38bdf8' }}>Resume</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: '#fff',
                        padding: '1rem',
                        borderRadius: '4px',
                        marginBottom: '1rem',
                        filter: 'drop-shadow(0 0 20px rgba(56, 189, 248, 0.2))'
                    }}
                >
                    {/* Placeholder for PDF Preview - Using an iframe or Image */}
                    <div style={{
                        width: '100%',
                        height: '150px',
                        background: '#f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#475569',
                        fontSize: '1.2rem'
                    }}>
                        Resume Preview Placeholder
                    </div>
                </motion.div>

                <motion.a
                    href="https://drive.google.com/file/d/1Hy7Vz2e8X4BFBMhhXxe-4kYcsZhChN-s/view?usp=sharing"
                    download
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '1rem 2rem',
                        background: '#38bdf8',
                        color: '#0f172a',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        fontSize: '1.2rem',
                        cursor: 'pointer'
                    }}
                >
                    <Download size={24} />
                    Download Resume
                </motion.a>
            </div>
        </PageWrapper>
    );
};

export default Resume;
