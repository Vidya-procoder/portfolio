import { motion } from 'framer-motion';

const PageWrapper = ({ children, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={className}
            style={{
                paddingTop: '80px', // Space for fixed navbar
                minHeight: '100vh',
                width: '100%',
                paddingLeft: '2rem',
                paddingRight: '2rem'
            }}
        >
            {children}
        </motion.div>
    );
};

export default PageWrapper;
