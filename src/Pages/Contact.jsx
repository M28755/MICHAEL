import { ContactSection } from "../components/Contact/contactSection";
import { motion } from "motion/react";

export const Contact = () => {
  return (
    <motion.div
          initial={{ opacity: 0, x: 100 }} // Slide in from the right
      animate={{ opacity: 1, x: 0 }}   // Center
      exit={{ opacity: 0, x: -100 }}   // Slide out to the left
      transition={{ duration: 1.2 }}
         
         >
    <div className="page-wrapper contact-page">
      <div className="contact-container">
        <ContactSection />
      </div>
    </div>
    </motion.div>
  );
};