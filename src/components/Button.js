import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="btn"
    >
      {text}
    </motion.button>
  );
};

export default Button;
