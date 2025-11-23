import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper direction="column" align="center" gap="30px">
        <Slide>
          <Text>
            "Working with Vladimir has been an absolute pleasure. His attention to detail 
            and commitment to delivering high-quality code is exceptional. He consistently 
            goes above and beyond to ensure projects are completed on time and exceed expectations."
          </Text>
          <Name>@vladimir kim</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span className={"active"}></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
    width: 100%;
`

const Text = styled.p`
    font-size: 18px;
    line-height: 1.8;
    color: ${theme.colors.fontSecondary};
    font-style: italic;
    margin: 0;

    @media ${theme.media.tablet} {
        font-size: 16px;
    }
`

const Name = styled.span`
    font-family: 'Josefin Sans', 'sans-serif';
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 24px;
    display: inline-block;
    color: ${theme.colors.accent};
    position: relative;
    
    &::before {
        content: "";
        position: absolute;
        left: -30px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 2px;
        background: ${theme.colors.accent};
    }
`

const Pagination = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 10px;
    
    span {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: ${theme.colors.borderColor};
        border-radius: 50%;
        transition: ${theme.animations.transition};
        cursor: pointer;

        &.active {
            background: ${theme.colors.accent};
            width: 32px;
            height: 8px;
            border-radius: 4px;
        }

        &:hover:not(.active) {
            background-color: ${theme.colors.fontMuted};
        }
    }
`