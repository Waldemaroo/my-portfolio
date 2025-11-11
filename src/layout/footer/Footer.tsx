import {Icon} from "../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

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
      <Copyright>HELLO BITCHES</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: palegoldenrod;
`
const Name = styled.span`

`
const SocialIconsList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialIconsItem = styled.li`

`
const SocialIconLink = styled.a`

`
const Copyright = styled.small`

`