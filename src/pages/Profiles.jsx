import { motion } from 'framer-motion';
import { ExternalLink, Github, Codepen, Code } from 'lucide-react';
import PageWrapper from '../components/Layout/PageWrapper';

const profiles = [
    {
        name: "GitHub",
        icon: <Github size={40} />,
        link: "https://github.com/Vidya-procoder/",
        color: "#f8fafc",
        stats: "15+ Repositories"
    },
    {
        name: "LeetCode",
        icon: <Code size={40} />,
        link: "https://leetcode.com/u/VIDYASRI_10/",
        color: "#fbbf24",
        stats: "60+ Problems Solved"
    },
    {
        name: "LinkedIn",
        icon: <ExternalLink size={40} />, // Using generic external link icon for LinkedIn as Lucide might not have it or I want to stay safe with icons
        link: "https://www.linkedin.com/in/vidyasri-dhanasekaran-922714257/",
        color: "#0ea5e9",
        stats: "1500+ Connections"
    },

];

const Profiles = () => {
    return (
        <PageWrapper>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'bold' }}
                >
                    Coding <span style={{ color: '#38bdf8' }}>Profiles</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {profiles.map((profile, index) => (
                        <a href={profile.link} target="_blank" rel="noopener noreferrer" key={profile.name} style={{ textDecoration: 'none' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                                    borderColor: profile.color,
                                    boxShadow: `0 0 20px ${profile.color}40`
                                }}
                                style={{
                                    background: 'rgba(30, 41, 59, 0.4)',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <div style={{ color: profile.color }}>
                                    {profile.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{profile.name}</h3>
                                <p style={{ color: '#94a3b8' }}>{profile.stats}</p>
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Profiles;
