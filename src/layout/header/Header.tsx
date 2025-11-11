import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const items = ["Home","Skills","Portfolio","Contact","Testimony"]


export const Header = () => {
  return (
    <StylerHeader>
      <Logo/>
      <Menu menuItems={items}/>
    </StylerHeader>
  );
};

const StylerHeader = styled.header`
    background-color: #f5af19;
    display: flex;
    justify-content: space-between;
`

