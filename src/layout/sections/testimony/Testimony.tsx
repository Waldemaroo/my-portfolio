import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Slider} from "../../../components/slider/Slider.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <Container>
      <SectionTitle>Testimony</SectionTitle>
        <ContentWrapper direction={"column"} align={"center"} gap="40px">
          <QuoteIconWrapper>
            <Icon iconId={"quote"} width="60" height="60" color={theme.colors.accent}/>
          </QuoteIconWrapper>
        <Slider/>
        </ContentWrapper>
      </Container>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
    position: relative;
`

const ContentWrapper = styled(FlexWrapper)`
    max-width: 800px;
    margin: 0 auto;
`

const QuoteIconWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.tertiaryBg};
    border: 2px solid ${theme.colors.borderColor};
    border-radius: 50%;
    position: relative;
    
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