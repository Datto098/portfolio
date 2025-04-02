import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsSection = styled.section`
    min-height: 100vh;
    padding: 8rem 10%;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.9)
    );
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
`;

const ProjectCard = styled(motion.div)`
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover img {
        transform: scale(1.1);
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s ease;
`;

const ProjectInfo = styled.div`
    padding: 2rem;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
`;

const ProjectDesc = styled.p`
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

const TechTag = styled.span`
    background: rgba(0, 255, 136, 0.1);
    color: #00ff88;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
`;

const Projects = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description:
                "Modern e-commerce platform with real-time inventory and payment integration",
            image: "/project1.jpg",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
        },
        {
            title: "AI Image Generator",
            description:
                "Web application that generates images using AI and machine learning",
            image: "/project2.jpg",
            tech: ["Python", "TensorFlow", "React", "AWS"],
        },
        {
            title: "Social Media Dashboard",
            description:
                "Analytics dashboard for social media management and monitoring",
            image: "/project3.jpg",
            tech: ["Vue.js", "Firebase", "D3.js"],
        },
    ];

    return (
        <ProjectsSection id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    background: "linear-gradient(45deg, #00ff88, #00a3ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                Featured Projects
            </motion.h2>

            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                    >
                        {/* <ProjectImage src={project.image} alt={project.title} /> */}
                        <ProjectInfo>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDesc>{project.description}</ProjectDesc>
                            <TechStack>
                                {project.tech.map((tech, i) => (
                                    <TechTag key={i}>{tech}</TechTag>
                                ))}
                            </TechStack>
                        </ProjectInfo>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectsSection>
    );
};

export default Projects;
