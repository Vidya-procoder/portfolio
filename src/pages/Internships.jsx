import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';

const internships = [
    {
        role: "Artificial Intelligence Trainee",
        company: "Infosys",
        duration: "3 Months",
        description: "Completed a hybrid training in Artificial Intelligence and soft skills, gaining hands-on exposure, professional communication skills, and industry readiness through online learning and on-campus sessions.",
    }
];

const certificates = [
    {
        platform: "Microsoft Certifed",
        courseName: "Data Fundamentals DP-900",
        year: "2025"
    },
    {
        platform: "Microsoft Certified",
        courseName: "Azure Fundamentals AZ-900",
        year: "2025"
    }
];

const Internships = () => {
    return (
        <PageWrapper>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'bold' }}
                >
                    Internships <span style={{ color: '#38bdf8' }}>& Certificates</span>
                </motion.h2>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#f8fafc' }}>
                        Internship Experience
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {internships.map((internship, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                style={{
                                    padding: '2rem',
                                    borderLeft: '4px solid #38bdf8',
                                    background: 'rgba(30, 41, 59, 0.5)',
                                    borderRadius: '0 8px 8px 0',
                                    backdropFilter: 'blur(5px)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                                            {internship.role}
                                        </h4>
                                        <span style={{ fontSize: '1.1rem', color: '#38bdf8' }}>
                                            {internship.company}
                                        </span>
                                    </div>
                                    <span style={{ padding: '0.4rem 0.8rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.9rem' }}>
                                        {internship.duration}
                                    </span>
                                </div>
                                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                                    {internship.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#f8fafc' }}>
                        Professional Certificates
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -5, borderColor: '#38bdf8' }}
                                style={{
                                    padding: '1.5rem',
                                    border: '1px solid rgba(148, 163, 184, 0.1)',
                                    background: 'rgba(30, 41, 59, 0.3)',
                                    borderRadius: '12px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span style={{ color: '#38bdf8', fontWeight: '500' }}>{cert.platform}</span>
                                    <span style={{ color: '#64748b' }}>{cert.year}</span>
                                </div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#e2e8f0' }}>
                                    {cert.courseName}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Internships;
