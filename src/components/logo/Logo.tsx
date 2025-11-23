import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Logo = () => {
  return (
    <StyledLogo href="#home">
      <Icon iconId={'code'} width="40" height="40"/>
      <LogoText>VK</LogoText>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`
    display: flex;
    align-items: center;
    gap: 12px;
    transition: ${theme.animations.transition};
    
    &:hover {
        opacity: 0.8;
    }
`;

const LogoText = styled.span`
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 2px;
    color: ${theme.colors.accent};
`;
