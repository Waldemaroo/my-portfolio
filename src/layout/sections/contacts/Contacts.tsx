import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
          <Field placeholder={"Name"}/>
          <Field placeholder={"Subject"}/>
          <Field placeholder={"TextArea"} as={"textarea"}/>
          <Button type={"submit"}>Send Message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
    align-items: center;
    
    textarea {
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;
    font-family: "Poppins", "sans-serif";
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    &::placeholder{
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.borderColor};
    }
`