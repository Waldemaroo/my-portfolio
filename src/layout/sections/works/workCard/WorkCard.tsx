import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.tsx";

interface WorkCardProps {
  title: string;
  text: string;
  src: string;
  demoLink?: string;
  codeLink?: string;
}

export const WorkCard = ({title, text, src, demoLink = "#", codeLink = "#"}: WorkCardProps) => {
  return (
    <StyledWorkCard>
      <ImageWrapper>
        <Image src={src} alt={title}/>
        <Overlay>
          <ViewButton href={demoLink} target="_blank" rel="noopener noreferrer">
            View Project
          </ViewButton>
        </Overlay>
      </ImageWrapper>
      <Description>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <LinksWrapper>
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">Demo</Link>
          <Link href={codeLink} target="_blank" rel="noopener noreferrer">Code</Link>
        </LinksWrapper>
      </Description>
    </StyledWorkCard>
  );
};

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: ${theme.animations.transition};
    z-index: 2;
`

const StyledWorkCard = styled.div`
    background-color: ${theme.colors.tertiaryBg};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 8px;
    overflow: hidden;
    transition: ${theme.animations.transition};
    
    &:hover {
        border-color: ${theme.colors.accent};
        
        ${Overlay} {
            opacity: 1;
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: 280px;
`

const Description = styled.div`
    padding: 30px;
    
    @media ${theme.media.tablet} {
        padding: 24px;
    }
`

const Title = styled.h3`
    color: ${theme.colors.font};
    margin-bottom: 16px;
    font-size: 24px;
`

const Text = styled.p`
    margin: 0 0 24px 0;
    color: ${theme.colors.fontSecondary};
    line-height: 1.7;
`

const LinksWrapper = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`

const ViewButton = styled.a`
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 14px 32px;
    min-width: 170px;
    text-align: center;
    border: 2px solid ${theme.colors.accent};
    background: transparent;
    color: ${theme.colors.accent};
    border-radius: 4px;
    transition: ${theme.animations.transition};
    text-decoration: none;
    display: inline-block;
    
    &:hover {
        background: ${theme.colors.accent};
        color: ${theme.colors.primaryBg};
    }
`
