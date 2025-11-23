import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";
import {theme} from "../../styles/Theme.tsx";

const items = ["Home", "Tech Stack", "Projects", "Contacts"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo/>
          <HeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    background-color: rgba(10, 10, 15, 0.95);
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    border-bottom: 1px solid rgba(0, 217, 255, 0.1);
    transition: ${theme.animations.transition};
    
    @media ${theme.media.tablet} {
        padding: 15px 0;
    }
`

