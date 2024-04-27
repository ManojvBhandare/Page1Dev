import { BackgroundLayer } from "./components/background-layer";
import { Home } from "./layouts/home";
import { HelpPage } from "./layouts/help-page";
// import WhatWeDo from "./layouts/what-we-do";
import { Navbar } from "./layouts/navbar";
import { Interested } from "./layouts/interested";
import { Contact } from "./layouts/contact";
function App() {
  return (
    <div>
      <BackgroundLayer></BackgroundLayer>
      <Navbar></Navbar>
      <Home></Home>
      <HelpPage />
      {/* <WhatWeDo /> */}
      <Interested />
      <Contact />
    </div>
  );
}
export default App;
