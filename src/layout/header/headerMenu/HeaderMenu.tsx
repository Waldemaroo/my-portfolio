import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {scrollToSection, formatSectionId} from "../../../utils/scroll.ts";

interface HeaderMenuProps {
  menuItems: string[];
}

export const HeaderMenu = ({menuItems}: HeaderMenuProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    scrollToSection(formatSectionId(item));
  };

  return (
    <StyledHeaderMenu>
      <MenuList>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <MenuLink 
              href={`#${formatSectionId(item)}`}
              onClick={(e) => handleClick(e, item)}
            >
              {item}
            </MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
    @media ${theme.media.tablet} {
        display: none;
    }
`

const MenuList = styled.ul`
    display: flex;
    gap: 40px;
    align-items: center;
    
    @media ${theme.media.tablet} {
        gap: 20px;
    }
`

const MenuItem = styled.li`
    position: relative;
`

const MenuLink = styled.a`
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: ${theme.colors.font};
    position: relative;
    padding: 8px 0;
    transition: ${theme.animations.transition};
    
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: ${theme.colors.accent};
        transition: ${theme.animations.transition};
    }
    
    &:hover {
        color: ${theme.colors.accent};
        
        &::after {
            width: 100%;
        }
    }
`
