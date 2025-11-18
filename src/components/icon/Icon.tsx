import iconsSprite from '../../assets/icons/icons-sprite.svg'
import styled from "styled-components";
import {theme} from "../../styles/Theme.tsx";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

export const Icon = (props:IconPropsType) => {
  return (
    <StyledIcon width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
    </StyledIcon>
  );
};

const StyledIcon = styled.svg`
  color: ${theme.colors.accent};
`;

