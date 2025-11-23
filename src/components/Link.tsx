import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const Link = styled.a`
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 8px 12px;
    position: relative;
    z-index: 0;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: ${theme.colors.accent};
        transition: ${theme.animations.transition};
        z-index: -1;
    }
    
    &:hover {
        color: ${theme.colors.accentHover};
        
        &::before {
            width: 100%;
        }
    }
`
