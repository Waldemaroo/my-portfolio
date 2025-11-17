import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";

export const TabMenu = (props : {menuItems : Array<string>}) => {
  return (
    <div>
      <StyledTabMenu>
        <ul>
          {props.menuItems.map((item, index)=>{
            return <ListItem key={index}>
                <Link href="">{item}</Link>
            </ListItem>
          })}
        </ul>
      </StyledTabMenu>
    </div>
  );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    ul {
       display: flex;
       gap: 20px;
        justify-content: center;
    }
`

const ListItem = styled.li`

`

