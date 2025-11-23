export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatSectionId = (text: string): string => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

