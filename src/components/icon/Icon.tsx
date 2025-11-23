import iconsSprite from '../../assets/icons/icons-sprite.svg';
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";
import {IconProps} from "../../types/common.ts";

export const Icon = ({iconId, width = "50", height = "50", viewBox = "0 0 50 50", color}: IconProps) => {
  return (
    <StyledIcon 
      width={width} 
      height={height} 
      viewBox={viewBox} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`}/>
    </StyledIcon>
  );
};

const StyledIcon = styled.svg<{color?: string}>`
  color: ${props => props.color || theme.colors.accent};
  transition: ${theme.animations.transition};
  flex-shrink: 0;
`;

