
import { offerings } from "../Data/capabilities"
import { motion } from "motion/react"
export const ServicePage = () => {
    return (
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Slide in from the right
      animate={{ opacity: 1, x: 0 }}   // Center
      exit={{ opacity: 0, x: 100 }}   // Slide out to the left
      transition={{ duration: 1.2 }}
         
         >
        <section className="offerings-section">
            <div className="offerings-container">
                {/* Section Header */}
                <div className="offerings-header">
                    <h2 className="offerings-title">Specialized Offerings</h2>
                    <p className="offerings-subtitle">
                        Translating complex requirements into scalable, performant, and accessible frontend
                        architectures. Focused on modern tooling and pristine code quality.
                    </p>
                </div>

                {/* Bento Grid Container */}
                <div className="offerings-grid">
                    {offerings.map((item, index) => (
                        <div key={index} className={`offering-card ${item.gridClass}`}>
                            <div className="offering-icon-box">{item.icon}</div>
                            <h3 className="offering-card-title">{item.title}</h3>
                            <p className="offering-card-description">{item.description}</p>
                            <span className="offering-tag">{item.tag}</span>
                        </div>
                    ))}

                    {/* Full-width Row Item (UI Implementation) */}
                    <div className="offering-card col-span-3 horizontal-layout">
                        <div className="horizontal-left">
                            <div className="offering-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <div className="horizontal-text">
                                <h3 className="offering-card-title">UI Implementation</h3>
                                <p className="offering-card-description">
                                    Pixel-perfect translation of design files (Figma, Sketch, Adobe XD) into production-ready code. Strict
                                    adherence to design system tokens, typography hierarchies, and spacing grids.
                                </p>
                            </div>
                        </div>
                        <span className="offering-tag horizontal-tag">Figma to Code —</span>
                    </div>
                </div>
            </div>
        </section>
        </motion.div>
    )
}