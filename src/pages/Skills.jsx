import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "JS", "HTML", "CSS", "Tailwind CSS"]
    },
    {
        title: "Backend",
        skills: ["Spring Boot", "Python", "MYSQL", "MongoDB", "Java",]
    },
    {
        title: "AI TOOLS",
        skills: ["ChatGPT", "Gemini", "AntiGravity", "Lovable", "Bolt", "Cursor",]
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Github", "Canva", "Figma", "Google Colab", "Jupyter Notebook"]
    }
];

const Skills = () => {
    return (
        <PageWrapper>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'bold' }}
                >
                    Technical <span style={{ color: '#38bdf8' }}>Skills</span>
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title}>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 + (catIndex * 0.1) }}
                                style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#94a3b8' }}
                            >
                                {category.title}
                            </motion.h3>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.3 + (catIndex * 0.1) + (index * 0.05),
                                            type: "spring"
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: 'rgba(56, 189, 248, 0.2)',
                                            borderColor: '#38bdf8'
                                        }}
                                        style={{
                                            padding: '1rem 2rem',
                                            background: 'rgba(30, 41, 59, 0.5)',
                                            border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '12px',
                                            cursor: 'default',
                                            fontWeight: '500',
                                            color: '#f8fafc'
                                        }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Skills;
