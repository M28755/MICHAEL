import CodeWindow from "../components/pageComponents/codeWindow"
import { MoveRight } from "lucide-react"
import { technologies } from "../Data/technologies"

import { TechnologyCard } from "../components/pageComponents/technologyCard"
import { capabilities } from "../Data/capabilities"
import { CapabilityCard } from "../components/pageComponents/capabilityCard.jsx"

export const HomePage = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-container">

                    {/* Left side: developer introduction and primary actions */}
                    <div className="hero-content">

                        <p className="hero-eyebrow">
                            Frontend Developer
                        </p>
                        <h1 className="hero-title">
                            Hi, I'm <span>OMONDI MICHAEL</span>
                        </h1>
                        <p className="hero-description">
                            I craft high-performance digital experiences at the intersection of design and engineering. Specializing in immersive web applications that push the boundaries
                        </p>
                        <div className="hero-actions">
                            <a href="/projects" className="button button-primary">
                                <span>View My Work </span>
                                <span><MoveRight /></span>
                            </a>
                            <a href="/contact" className="button button-secondary">
                                <span>Contact me </span>
                                <span><MoveRight /></span>
                            </a>

                        </div>
                    </div>

                    {/* Right side: developer/code visual */}
                    <div className="hero-visual">
                        <CodeWindow />
                    </div>

                </div>
            </section>
            <section className="technologies">
                <div className="technologies-container">
                    <p className="technologies-label">
                        Technologies I Work With
                    </p>

                    {/* Technology cards */}
                    <div className="technologies-grid">
                        {technologies.map((technology) => (
                            <TechnologyCard
                                key={technology.name}
                                technology={technology}
                            />
                        ))}
                    </div>

                </div>
            </section>
            <section className="what-i-do">
                <div className="what-i-do-container">

                    <h2 className="what-i-do-title">
                        What I Do
                    </h2>

                    {/* Reusable capability cards */}
                    <div className="capabilities-grid">
                        {capabilities.map((capability) => (
                            <CapabilityCard
                                key={capability.id}
                                capability={capability}
                            />
                        ))}
                    </div>

                </div>
            </section>


        </>

    )
}