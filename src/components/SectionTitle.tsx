import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";

export const SectionTitle = styled.h2`
  text-align: center;
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 700;
    font-size: clamp(32px, 5vw, 48px);
    letter-spacing: 2px;
    margin-bottom: 80px;
    color: ${theme.colors.font};
    position: relative;
    
    &::after {
        content: "";
        display: block;
        width: 60px;
        height: 2px;
        background: ${theme.colors.accent};
        margin: 20px auto 0;
    }
    
    @media ${theme.media.tablet} {
        margin-bottom: 60px;
        font-size: clamp(28px, 6vw, 40px);
    }
`