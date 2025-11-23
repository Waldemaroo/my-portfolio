import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {useState} from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contacts = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <StyledContacts id="contacts">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <StyledForm onSubmit={handleSubmit}>
          <Field 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Field 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Field 
            type="text" 
            name="subject"
            placeholder="Subject" 
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <TextAreaField 
            name="message"
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" size="large">Send Message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
    position: relative;
`

const StyledForm = styled.form`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    align-items: stretch;
`

const baseInputStyles = `
    width: 100%;
    background-color: ${theme.colors.tertiaryBg};
    border: 2px solid ${theme.colors.borderColor};
    border-radius: 8px;
    padding: 16px 20px;
    font-family: "Poppins", "sans-serif";
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    transition: ${theme.animations.transition};
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: none;
    }
    
    &:focus {
        outline: none;
        border-color: ${theme.colors.accent};
        box-shadow: 0 0 0 3px rgba(74, 158, 255, 0.1);
    }
    
    &:hover {
        border-color: ${theme.colors.borderColorHover};
    }
`;

const Field = styled.input`${baseInputStyles}`;

const TextAreaField = styled.textarea`
    ${baseInputStyles}
    resize: vertical;
    min-height: 180px;
`;