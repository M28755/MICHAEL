
import { skills } from '../Data/technologies'
import { timelineItems } from '../Data/technologies'
import { valueProps } from '../Data/capabilities'
import { motion } from 'motion/react'

export const AboutMe = () => {
    return (
        <>

         <motion.div
          initial={{ opacity: 0, x: 100 }} // Slide in from the right
      animate={{ opacity: 1, x: 0 }}   // Center
      exit={{ opacity: 0, x: -100 }}   // Slide out to the left
      transition={{ duration: 1.2 }}
         
         >
            <section className="about-section">
                <div className="about-container">
                    {/* Section Header */}
                    <div className="about-header">
                        <h2 className="about-title">About Me</h2>
                        <p className="about-subtitle">
                            Bridging the gap between engineering and design.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="about-grid">

                        <div className="about-content">

                            <h3 className="about-heading">Architecting Digital Experiences</h3>

                            <div className="about-body">
                                <p>
                                    I am an enthusiastic Junior Frontend Engineer dedicated to building performant, accessible web applications and mastering modern web design systems. I view code as a craft, prioritizing clean architecture and structural integrity alongside great visual presentation.
                                </p>
                                <p>
                                    Bridging UI/UX design and software engineering, I focus on transforming designs into pixel-perfect, responsive user interfaces. I am passionate about writing maintainable code and ensuring every user enjoys a seamless experience across all devices.
                                </p>
                                <p>
                                    My goal is to grow alongside collaborative engineering teams, deepen my technical skills, and help build digital products that are robust, intuitive, and visually engaging.
                                </p>
                            </div>
                        </div>

                        {/* Right Image Column */}
                        <div className="about-image-wrapper">
                            <img
                                src='/michael.webp'
                                alt="Developer working at desk"
                                className="about-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="competencies-section">
                <div className="competencies-container">
                    {/* Header */}
                    <div className="competencies-header">

                        <h2 className="competencies-title">Core Competencies</h2>
                    </div>

                    {/* Skill Progress Cards Grid */}
                    <div className="competencies-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-percentage">{skill.level}%</span>
                                </div>
                                <div className="progress-bar-background">
                                    <div
                                        className="progress-bar-fill"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="timeline-section">
                <div className="timeline-container">
                    <h2 className="timeline-title">Experience & Education</h2>

                    <div className="timeline-list">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="timeline-item">
                                {/* Left Column: Marker & Date */}
                                <div className="timeline-meta">
                                    <div className={`timeline-dot ${item.active ? 'active' : ''}`} />
                                    <span className="timeline-period">{item.period}</span>
                                </div>

                                {/* Right Column: Content Card */}
                                <div className="timeline-card">
                                    <h3 className="timeline-role">{item.role}</h3>
                                    <span className="timeline-company">{item.company}</span>
                                    <p className="timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="value-section">
                <div className="value-container">
                    <div className="value-card">
                        {/* Header */}
                        <div className="value-header">
                            <span className="value-badge">VALUE PROPOSITION</span>
                            <h2 className="value-title">Why Collaborate With Me?</h2>
                        </div>

                        {/* Grid Content */}
                        <div className="value-grid">
                            {valueProps.map((item, index) => (
                                <div key={index} className="value-item">
                                    <div className="value-item-header">
                                        <div className="value-icon">{item.icon}</div>
                                        <h3 className="value-item-title">{item.title}</h3>
                                    </div>
                                    <p className="value-item-description">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            </motion.div>
        </>
    )
}