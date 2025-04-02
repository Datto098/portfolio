import styled from "styled-components";
import { motion } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
`;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 10;
`;

const Logo = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(45deg, #00ff88, #00a3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 3rem;
`;

const NavLink = styled(motion.a)`
    color: white;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    padding: 0.5rem 0;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: #00ff88;
        transition: width 0.3s ease;
    }

    &:hover::after {
        width: 100%;
    }
`;

const MainContent = styled.div`
    scroll-behavior: smooth;
`;

const PortfolioContent = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Container>
            <Nav>
                <Logo onClick={() => scrollToSection("hero")}>
                    DevPortfolio
                </Logo>
                <NavLinks>
                    <NavLink
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("hero");
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("about");
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        About
                    </NavLink>
                    <NavLink
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("projects");
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("contact");
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact
                    </NavLink>
                </NavLinks>
            </Nav>

            <MainContent>
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </MainContent>
        </Container>
    );
};

export default PortfolioContent;
