import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PageWrapper from '../components/Layout/PageWrapper';

const projects = [
    {
        title: "SMS Spam Detection System",
        description: "Developed a Real-time SMS Spam Detection System it classifies a message as spam or ham",
        subtext: "ML",
        tech: ["Pandas", "Python", "Scikit-learn", "scikit-learn,"],

        github: "https://github.com/Vidya-procoder/new_intern_sms"
    },
    {
        title: "QR Code Generator",
        description: "Developed a QR Code generator using HTML, CSS, and JavaScript it generate a QR code instantly Based on the URL Or Text.",
        subtext: "Frontend",
        tech: ["HTML", "CSS", "JS"],
        demo: "https://hassle-free-qr-generator.netlify.app/",
        github: "https://github.com/Vidya-procoder/QR_Code-html-css-js-"
    },
    {
        title: "Product Store",
        description: "Developed a secure RESTful API–based product store enabling full CRUD operations on products with pricing and images, supporting continuous testing and feature validation prior to deployment on a production e-commerce platform.",
        subtext: "MERN STACK",
        tech: ["MongoDB", "Express.js", "ReactJS", "Node.js", "RESTful API"],

    },
    {
        title: "IPL ScoreBoard Design",
        description: "Designed a IPL Static Score Board for Learning UI/UX",
        subtext: "UI/UX",
        tech: ["Figma"],
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
            }}
            style={{
                background: 'var(--card-bg)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                cursor: 'pointer'
            }}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                <span style={{ fontSize: '0.8rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {project.subtext}
                </span>
                <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0', fontWeight: 'bold' }}>{project.title}</h3>
                <p style={{ color: '#94a3b8', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tech.map(t => (
                        <span key={t} style={{
                            background: 'rgba(56, 189, 248, 0.1)',
                            color: '#38bdf8',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '20px',
                            fontSize: '0.85rem'
                        }}>
                            {t}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
                        <Github size={20} /> Code
                    </a>
                    <a href={project.demo} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8' }}>
                        <ExternalLink size={20} /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <PageWrapper>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 'bold' }}
                >
                    Featured <span style={{ color: '#38bdf8' }}>Projects</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    paddingBottom: '4rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
};

export default Projects;
