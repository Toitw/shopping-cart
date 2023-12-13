import { motion } from 'framer-motion';

const CustomButton = ({ onClick, name }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
            }}
            onClick={onClick}
        >
            {name}
        </motion.button>
    );
};

export default CustomButton;
