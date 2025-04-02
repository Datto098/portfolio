import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = styled(motion.nav)`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 1.5rem 2rem;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
`;

const NavLink = styled(motion.a)`
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background: #2dd4bf;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
`;
