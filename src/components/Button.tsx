import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {ButtonVariant, ButtonSize} from "../types/common.ts";

interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export const Button = styled.button<ButtonProps>`
    font-weight: 500;
    font-size: ${props => {
        if (props.size === "small") return "12px";
        if (props.size === "large") return "16px";
        return "14px";
    }};
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: ${props => {
        if (props.size === "small") return "10px 24px";
        if (props.size === "large") return "18px 40px";
        return "14px 32px";
    }};
    min-width: ${props => {
        if (props.size === "small") return "120px";
        if (props.size === "large") return "200px";
        return "170px";
    }};
    
    position: relative;
    z-index: 0;
    border-radius: 4px;
    overflow: hidden;
    transition: ${theme.animations.transition};
    
    ${props => {
        if (props.variant === "outline") {
            return `
                border: 2px solid ${theme.colors.accent};
                background: transparent;
                color: ${theme.colors.accent};
                
                &:hover {
                    background: ${theme.colors.accent};
                    color: ${theme.colors.primaryBg};
                }
            `;
        }
        if (props.variant === "secondary") {
            return `
                background: ${theme.colors.tertiaryBg};
                color: ${theme.colors.font};
                border: 2px solid ${theme.colors.borderColor};
                
                &:hover {
                    border-color: ${theme.colors.accent};
                    background: ${theme.colors.secondaryBg};
                }
            `;
        }
        return `
            background: ${theme.colors.accent};
            color: ${theme.colors.font};
            border: none;
            
            &:hover {
                background: ${theme.colors.accentHover};
            }
        `;
    }}
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }
`