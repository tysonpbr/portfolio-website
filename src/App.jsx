import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Skills, Interests } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='bg-hero-pattern resize-none bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;