import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/NavBar";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";
import Experience from "./components/Sections/Experience";
import Education from "./components/Sections/Education";
import Projects from "./components/Sections/Projects";
import StartCanvas from "./components/canvas/Stars";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Sections/Footer";
import Volunteering from "./components/Sections/Volunteering";

const Body = styled.div`
   background-color: ${({ theme }) => theme.bg};
   width: 100%;
   overflow-x: hidden;
   position: relative;
`;

const Wrapper = styled.div`
   padding-bottom: 100px;
   background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
      linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
   width: 100%;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
         <Body>
          <StartCanvas />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio-website" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Education" element={<Education/>} />
            <Route path="/Volunteering" element={<Volunteering/>} />
          </Routes>
        <Footer/>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function Home() {
  return (
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Contact />
            </Wrapper>
            {/* <Projects />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer /> */}
          </div>
);
}

export default App;
