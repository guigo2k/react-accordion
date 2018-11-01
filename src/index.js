import React from "react";
import { render } from "react-dom";

import AccordionSection from './AccordionSection';
import Accordion from "./Accordion";
import "./styles.css";

function App() {
  const tableContent = [
    {
      "label": "GitLab Project 01",
      "user": "mfofoca",
      "url": "https://www.gitlab.com/mfofoca"
    },{
      "label": "GitLab Project 02",
      "user": "guigo2k",
      "url": "https://www.gitlab.com/guigo2k"
    }
  ];

  return (
    <div className="app">
      <h1>React Accordion</h1>
      <Accordion tableContent={tableContent} TableElement={AccordionSection} />
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
