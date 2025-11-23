import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Josefin+Sans:wght@400;500;600;700&display=swap');
    
    *,*::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.6;
        background-color: ${theme.colors.primaryBg};
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font};
        cursor: pointer;
        transition: ${theme.animations.transition};
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};
        font-family: inherit;
        transition: ${theme.animations.transition};
    }
    
    section {
        padding: 120px 0;
        position: relative;
    }
    
    section:nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg};
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Josefin Sans', 'sans-serif';
        font-weight: 600;
        line-height: 1.2;
        margin: 0;
    }
    
    h1 {
        font-size: clamp(32px, 5vw, 64px);
        font-weight: 700;
    }
    
    h2 {
        font-size: clamp(28px, 4vw, 48px);
    }
    
    h3 {
        font-size: clamp(20px, 3vw, 24px);
        font-weight: 600;
        letter-spacing: 1px;
    }
    
    p {
        font-weight: 400;
        font-size: clamp(14px, 2vw, 16px);
        line-height: 1.7;
        color: ${theme.colors.fontSecondary};
    }
    
    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
    
    ::selection {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
    }
    
    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background: ${theme.colors.secondaryBg};
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${theme.colors.accent};
        border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.accentHover};
    }
`