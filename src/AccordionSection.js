import React, { Component } from "react";
import PropTypes from "prop-types";

class AccordionSection extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Object).isRequired,
  //   isOpen: PropTypes.bool.isRequired,
  //   label: PropTypes.string.isRequired,
  //   onClick: PropTypes.func.isRequired
  // };

  onClick = () => {
    const { tableIndex } = this.props;
    this.props.onClick(tableIndex);
  };

  render() {
    const { onClick, props: { isOpen, label, tableIndex } } = this;

    return (
      <div className="instancesItem" style={{ background: isOpen ? "#fafafa" : "#ffffff" }}>
        <div onClick={() => onClick(tableIndex)} className="instancesLabel">
          {label}
          <div style={{ float: "left" }}>
            {!isOpen && <i className="fas fa-angle-right"></i>}
            {isOpen && <i className="fas fa-angle-down"></i>}
          </div>
        </div>
        {isOpen && (
          <div>
            <table className="instancesTable">
              <tbody>
                <tr>
                  <td valign="top" className="project">
                    <span className="title"><i class="fas fa-user"></i> User:</span>
                    <span className="text">{this.props.user}</span>
                      <span className="title"><i class="fas fa-globe"></i> URL:</span>
                    <span className="text">{this.props.url}</span>
                  </td>
                  <td valign="top" className="action">
                    <button className="bt-full">Configure Webhook</button>
                    <button className="bt-red-light">Remove Instance</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
