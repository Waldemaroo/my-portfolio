import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper align={"center"} direction={"column"} gap="30px">
          <Name>Vladimir Kim</Name>
          <SocialIconsList>
            <SocialIconsItem>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Icon iconId={"telegram"} width="24" height="24" color={theme.colors.accent}/>
              </SocialIconLink>
            </SocialIconsItem>
            <SocialIconsItem>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon iconId={"instagram"} width="24" height="24" color={theme.colors.accent}/>
              </SocialIconLink>
            </SocialIconsItem>
            <SocialIconsItem>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer" aria-label="VK">
                <Icon iconId={"vk"} width="24" height="24" color={theme.colors.accent}/>
              </SocialIconLink>
            </SocialIconsItem>
            <SocialIconsItem>
              <SocialIconLink href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon iconId={"linkedIn"} width="24" height="24" color={theme.colors.accent}/>
              </SocialIconLink>
            </SocialIconsItem>
          </SocialIconsList>
          <Copyright>© 2025 Vladimir Kim. All Rights Reserved.</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 60px 0 40px;
    border-top: 1px solid ${theme.colors.borderColor};
    position: relative;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: ${theme.colors.accent};
        opacity: 0.3;
    }
`

const Name = styled.span`
    font-family: "Josefin Sans", "sans-serif";
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 3px;
    color: ${theme.colors.accent};
`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 24px;
    margin: 0;
    padding: 0;
    
    @media ${theme.media.mobile} {
        gap: 16px;
    }
`

const SocialIconsItem = styled.li`
    list-style: none;
`

const SocialIconLink = styled.a`
    width: 50px;
    height: 50px;
    background-color: ${theme.colors.tertiaryBg};
    border: 2px solid ${theme.colors.borderColor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    
    &:hover {
        border-color: ${theme.colors.accent};
        background-color: ${theme.colors.accent};
        
        svg {
            color: ${theme.colors.primaryBg};
        }
    }
    
    @media ${theme.media.mobile} {
        width: 44px;
        height: 44px;
    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: ${theme.colors.fontMuted};
`