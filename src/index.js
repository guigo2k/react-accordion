import React from "react";
import { render } from "react-dom";

import Accordion from "./Accordion";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>React Accordion</h1>
      <Accordion>

        <div className="instancesLabel" label="GitLab Project 1">
          <table className="instancesTable">
            <tbody>
              <tr>
                <td valign="top" className="project">
                  <span className="title"><i class="fas fa-user"></i> User:</span>
                  <span className="text">guigo2k</span>
                  <span className="title"><i class="fas fa-globe"></i> URL:</span>
                  <span className="text"><a href="#">https://www.gitlab.com/guigo2k</a></span>
                </td>
                <td valign="top" className="action">
                  <button className="bt-full">Configure Webhook</button>
                  <button className="bt-red-light">Remove Instance</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="instancesLabel" label="GitLab Project 2">
          <table className="instancesTable">
            <tbody>
              <tr>
                <td valign="top" className="project">
                  <span className="title"><i class="fas fa-user"></i> User:</span>
                  <span className="text">guigo2k</span>
                    <span className="title"><i class="fas fa-globe"></i> URL:</span>
                  <span className="text">https://www.gitlab.com/guigo2k</span>
                </td>
                <td valign="top" className="action">
                  <button className="bt-full">Configure Webhook</button>
                  <button className="bt-red-light">Remove Instance</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </Accordion>
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
