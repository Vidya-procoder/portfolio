import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import Hero3DScene from '../components/Hero3DScene';
import TypewriterText from '../components/TypewriterText';

const Hero = () => {
    return (
        <PageWrapper className="hero-page">
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 'calc(100vh - 80px)', // adjust for navbar
                maxWidth: '1200px',
                margin: '0 auto',
                gap: '2rem'
            }}>
                {/* Text Content */}
                <div style={{ flex: 1, zIndex: 1 }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.5rem', color: '#38bdf8', marginBottom: '1rem' }}
                    >
                        Hello, I'm Vidyasri DK, and I'm a
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        style={{ fontSize: '4rem', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1rem', minHeight: '130px' }}
                    >
                        {/* <span style={{ display: 'block' }}>I am a</span> */}
                        <span style={{ color: '#94a3b8' }}>
                            <TypewriterText roles={["Creative Developer", "AI/ML Enthusiast", "Vibe Coder", "Mern Stack Developer", "Passionate IT Student"]} />
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '2rem', maxWidth: '500px' }}
                    >
                        A Creative Developer who blends design thinking with development skills to build responsive and engaging web applications. Passionate about continuous learning and applying new technologies through practical projects.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        <Link to="/projects">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    background: '#38bdf8',
                                    color: '#0f172a',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    borderRadius: '8px',
                                    border: 'none'
                                }}
                            >
                                View Projects
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(56, 189, 248, 0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'transparent',
                                    color: '#38bdf8',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    borderRadius: '8px',
                                    border: '2px solid #38bdf8'
                                }}
                            >
                                Contact Me
                            </motion.button>
                        </Link>
                        <a href="https://drive.google.com/file/d/1Hy7Vz2e8X4BFBMhhXxe-4kYcsZhChN-s/view?usp=sharing" download>
                            <motion.button
                                whileHover={{ scale: 1.05, color: '#fff' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1rem 2rem',
                                    background: 'transparent',
                                    color: '#94a3b8',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    borderRadius: '8px'
                                }}
                            >
                                ↓ Resume
                            </motion.button>
                        </a>
                    </motion.div>
                </div>

                {/* 3D Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Hero3DScene />
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Hero;
