import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";
import {useState} from "react";

interface TabMenuProps {
  menuItems: string[];
}

export const TabMenu = ({menuItems}: TabMenuProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabMenu>
      <TabList>
        {menuItems.map((item, index) => (
          <TabItem key={index}>
            <TabButton 
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {item}
            </TabButton>
          </TabItem>
        ))}
      </TabList>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 50px;
       display: flex;
        justify-content: center;
    
    @media ${theme.media.tablet} {
        margin-bottom: 40px;
    }
`

const TabList = styled.ul`
    display: flex;
    gap: 8px;
    background: ${theme.colors.tertiaryBg};
    padding: 6px;
    border-radius: 8px;
    border: 1px solid ${theme.colors.borderColor};
    flex-wrap: wrap;
    justify-content: center;
`

const TabItem = styled.li`
    list-style: none;
`

const TabButton = styled.button<{active: boolean}>`
    padding: 10px 24px;
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${props => props.active ? theme.colors.font : theme.colors.fontSecondary};
    background: ${props => props.active ? theme.colors.accent : 'transparent'};
    border-radius: 6px;
    transition: ${theme.animations.transition};
    position: relative;
    
    &:hover {
        color: ${theme.colors.font};
        ${props => !props.active && `
            background: ${theme.colors.secondaryBg};
        `}
    }
    
    @media ${theme.media.mobile} {
        padding: 8px 16px;
        font-size: 12px;
    }
`

