import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Testimony} from "./layout/sections/testimony/Testimony.tsx";
import {Slogan} from "./layout/sections/slogan/Slogan.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Slogan/>
      <Contacts/>
    </>
  );
}

export default App;


