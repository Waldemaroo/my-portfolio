import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper align={"center"} direction={"column"}>
      <Name>Vladimir</Name>
      <SocialIconsList>
        <SocialIconsItem>
          <SocialIconLink>
            <Icon iconId={"telegram"}/>
          </SocialIconLink>
        </SocialIconsItem>
        <SocialIconsItem>
          <SocialIconLink>
            <Icon iconId={"instagram"}/>
          </SocialIconLink>
        </SocialIconsItem>
        <SocialIconsItem>
          <SocialIconLink>
            <Icon iconId={"vk"}/>
          </SocialIconLink>
        </SocialIconsItem>
        <SocialIconsItem>
          <SocialIconLink>
            <Icon iconId={"linkedIn"}/>
          </SocialIconLink>
        </SocialIconsItem>
      </SocialIconsList>
      <Copyright>© 2025 Vladimir Kim, All Rights Reserved. </Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font-family: "Josefin Sans", "sans-serif";
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;
`
const SocialIconsList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialIconsItem = styled.li`
    
`
const SocialIconLink = styled.a`
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
     width: 35px;
     height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.accent};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
}
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`