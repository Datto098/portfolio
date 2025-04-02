import styled from "styled-components";
import { motion } from "framer-motion";

const AboutSection = styled.section`
    min-height: 100vh;
    padding: 8rem 10%;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        padding: 6rem 5%;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Title = styled(motion.h2)`
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    background: linear-gradient(45deg, #00ff88, #00a3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Bio = styled(motion.p)`
    font-size: 1.1rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.8);
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
`;

const StatItem = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    h3 {
        font-size: 2.5rem;
        font-weight: 700;
        color: #00ff88;
        margin-bottom: 0.5rem;
    }

    p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
    }
`;

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const SkillCategory = styled.div`
    h3 {
        font-size: 1.2rem;
        color: #00ff88;
        margin-bottom: 1rem;
    }
`;

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
`;

const SkillItem = styled(motion.div)`
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
        background: rgba(0, 255, 136, 0.1);
        border-color: #00ff88;
    }
`;

const About = () => {
    return (
        <AboutSection id="about">
            <InfoContainer>
                <Title
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About me
                </Title>

                <Bio
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Là một Full-stack Developer với 2 năm kinh nghiệm, tôi đam
                    mê tạo ra những trải nghiệm số độc đáo và sáng tạo. Với nền
                    tảng vững chắc về cả frontend và backend, tôi luôn tìm cách
                    kết hợp công nghệ mới nhất để tạo ra các giải pháp tối ưu
                    cho khách hàng.
                </Bio>

                <StatsGrid>
                    <StatItem
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>2+</h3>
                        <p>Năm kinh nghiệm</p>
                    </StatItem>
                    <StatItem
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3>20+</h3>
                        <p>Dự án hoàn thành</p>
                    </StatItem>
                    <StatItem
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3>30+</h3>
                        <p>Khách hàng hài lòng</p>
                    </StatItem>
                    <StatItem
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3>5+</h3>
                        <p>Giải thưởng</p>
                    </StatItem>
                </StatsGrid>
            </InfoContainer>

            <SkillsContainer>
                <SkillCategory>
                    <h3>Frontend Development</h3>
                    <SkillGrid>
                        {[
                            "React",
                            "Vue.js",
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "Three.js",
                        ].map((skill, index) => (
                            <SkillItem
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                            >
                                {skill}
                            </SkillItem>
                        ))}
                    </SkillGrid>
                </SkillCategory>

                <SkillCategory>
                    <h3>Backend Development</h3>
                    <SkillGrid>
                        {[
                            "Node.js",
                            "Python",
                            "MongoDB",
                            "PostgreSQL",
                            "GraphQL",
                            "Docker",
                        ].map((skill, index) => (
                            <SkillItem
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                            >
                                {skill}
                            </SkillItem>
                        ))}
                    </SkillGrid>
                </SkillCategory>

                <SkillCategory>
                    <h3>Tools & Others</h3>
                    <SkillGrid>
                        {[
                            "Git",
                            "AWS",
                            "Firebase",
                            "Figma",
                            "Jest",
                            "CI/CD",
                        ].map((skill, index) => (
                            <SkillItem
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ y: -5 }}
                            >
                                {skill}
                            </SkillItem>
                        ))}
                    </SkillGrid>
                </SkillCategory>
            </SkillsContainer>
        </AboutSection>
    );
};

export default About;
