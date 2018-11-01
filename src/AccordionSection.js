import React, { Component } from "react";
import PropTypes from "prop-types";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label } } = this;

    return (
      <div className="instancesItem" style={{ background: isOpen ? "#fafafa" : "#ffffff" }}>
        <div onClick={onClick} className="instancesLabel">
          {label}
          <div style={{ float: "left" }}>
            {!isOpen && <i className="fas fa-angle-right"></i>}
            {isOpen && <i className="fas fa-angle-down"></i>}
          </div>
        </div>
        {isOpen && (
          <div>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
