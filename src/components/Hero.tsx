import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10%;
    position: relative;
    overflow: hidden;
`;

const GradientText = styled(motion.h1)`
    font-size: clamp(3rem, 8vw, 7rem);
    font-weight: 900;
    background: linear-gradient(45deg, #00ff88, #00a3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
    margin: 0;
`;

const SubTitle = styled(motion.p)`
    font-size: clamp(1rem, 2vw, 1.5rem);
    color: #ffffff80;
    margin-top: 2rem;
`;

const Hero = () => {
    return (
        <HeroSection>
            <GradientText
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Creative
                <br />
                Developer
            </GradientText>
            <SubTitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Turning ideas into interactive experiences
            </SubTitle>
        </HeroSection>
    );
};

export default Hero;
