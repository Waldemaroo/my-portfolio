import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

const items = ["Home", "Skills", "Portfolio", "Contact", "Testimony"]


export const Header = () => {
  return (
    <StylerHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo/>
          <HeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StylerHeader>
  );
};

const StylerHeader = styled.header`
    background-color: rgba(31,31,32,0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

