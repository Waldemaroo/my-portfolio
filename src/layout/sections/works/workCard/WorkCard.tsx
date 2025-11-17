import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {Button} from "../../../../components/Button.tsx";

type WorkCardPropsType = {
  title: string
  text: string
  src: string

}

export const WorkCard = (props: WorkCardPropsType) => {
  return (
    <StyledWorkCard>
      <ImageWrapper>
        <Image src={props.src} alt=""></Image>
        <Button>View project</Button>
      </ImageWrapper>
      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>code</Link>
      </Description>
    </StyledWorkCard>
  );
};

const StyledWorkCard = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;
    
    &:hover{
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            backdrop-filter: blur(8px);
            background-color: rgba(0,0,0,0.3);
        }
        ${Button} {
            opacity: 1
        }
    }
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        &::before{
            width: 100%;
            height: 100%;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`
`

const Description = styled.div`
    padding: 25px 20px;
`

const Text = styled.p`
    margin: 14px 0 10px;
`
