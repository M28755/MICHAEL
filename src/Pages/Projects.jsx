import { useState } from "react";
import { projects } from "../Data/capabilities";
import { motion } from "motion/react";

const filterCategories = ['ALL', 'HTML/CSS', 'JavaScript', 'React', 'UI/UX'];

export const Projects =() =>{

    const [activeFilter, setActiveFilter] = useState('ALL')

    const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((project) => project.category === activeFilter);
    return(
      <motion.div
          initial={{ opacity: 0, x: 100 }} // Slide in from the right
      animate={{ opacity: 1, x: 0 }}   // Center
      exit={{ opacity: 0, x: -100 }}   // Slide out to the left
      transition={{ duration: 1.2 }}
         
         >
        <section className="works-section">
      <div className="works-container">
        {/* Header */}
        <div className="works-header">
          <h2 className="works-title">
            Selected <span className="works-title-accent">Works.</span>
          </h2>
          <p className="works-subtitle">
            A showcase of technical precision and user-centric design. Exploring the
            intersection of high-performance engineering and elegant interfaces.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="works-filters">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="works-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-actions">
                  {project.featured ? (
                    <>
                      <a href={project.liveUrl} className="btn-primary">
                        Live Demo
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                      <a href={project.githubUrl} className="btn-secondary">
                        Github
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </a>
                    </>
                  ) : (
                    <div className="project-actions-row">
                      <span className="code-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </span>
                      <a href={project.demoUrl} className="link-demo">
                        Demo →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.div>
    )

}