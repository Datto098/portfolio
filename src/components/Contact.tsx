import styled from "styled-components";
import { motion } from "framer-motion";
// import { AiFillGithub } from "react-icons/ai";
// import { FaTelegram } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";

const ContactSection = styled.section`
    min-height: 100vh;
    padding: 8rem 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.95)
    );
`;

const ContactForm = styled(motion.form)`
    width: 100%;
    max-width: 600px;
    margin-top: 4rem;
`;

const InputGroup = styled.div`
    margin-bottom: 2rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #00ff88;
        background: rgba(0, 255, 136, 0.05);
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    min-height: 150px;
    transition: all 0.3s ease;

    &:focus {
        outline: none;
        border-color: #00ff88;
        background: rgba(0, 255, 136, 0.05);
    }
`;

const SubmitButton = styled(motion.button)`
    padding: 1rem 2rem;
    background: linear-gradient(45deg, #00ff88, #00a3ff);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 3rem;
    margin-top: 4rem;
`;

const SocialLink = styled(motion.a)`
    color: white;
    font-size: 2rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    svg {
        width: 32px;
        height: 32px;
    }

    &:hover {
        color: #00ff88;
    }

    span {
        font-size: 1rem;
    }
`;

const Contact = () => {
    return (
        <ContactSection id="contact">
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
                Let's Connect
            </motion.h2>

            <ContactForm
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <InputGroup>
                    <Label>Name</Label>
                    <Input type="text" placeholder="Your name" />
                </InputGroup>

                <InputGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="your@email.com" />
                </InputGroup>

                <InputGroup>
                    <Label>Message</Label>
                    <TextArea placeholder="Your message..." />
                </InputGroup>

                <SubmitButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Send Message
                </SubmitButton>
            </ContactForm>

            <SocialLinks>
                <SocialLink
                    href="https://github.com/Datto098"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* {AiFillGithub({ size: 32 })} */}
                    <span>GitHub</span>
                </SocialLink>

                <SocialLink
                    href="https://t.me/Datto098"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {/* <FaTelegramPlane /> */}
                    <span>Telegram</span>
                </SocialLink>
            </SocialLinks>
        </ContactSection>
    );
};

export default Contact;
