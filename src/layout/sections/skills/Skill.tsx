import {Icon} from "../../../components/icon/Icon.tsx";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {theme} from "../../../styles/Theme.tsx";

interface SkillProps {
  iconId: string;
  title: string;
  description: string;
}

export const Skill = ({iconId, title, description}: SkillProps) => {
  return (
    <StyledSkill>
      <FlexWrapper direction="column" align="center" gap="20px">
        <IconWrapper>
          <Icon iconId={iconId} width="60" height="60"/>
        </IconWrapper>
        <SkillTitle>{title}</SkillTitle>
        <SkillText>{description}</SkillText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const IconWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${theme.colors.accent};
        opacity: 0.1;
        border-radius: 50%;
    }
`

const StyledSkill = styled.div`
    padding: 30px 20px;
    background: ${theme.colors.tertiaryBg};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 8px;
    transition: ${theme.animations.transition};
    
    &:hover {
        border-color: ${theme.colors.accent};
    }
    
    @media ${theme.media.tablet} {
        padding: 24px 16px;
    }
`

const SkillTitle = styled.h3`
    margin: 0;
    text-transform: uppercase;
    color: ${theme.colors.font};
    font-size: 20px;
    letter-spacing: 1px;
`

const SkillText = styled.p`
    text-align: center;
    color: ${theme.colors.fontSecondary};
    line-height: 1.7;
    margin: 0;
`