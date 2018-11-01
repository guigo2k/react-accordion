import React, { Component } from "react";
import _ from 'lodash';
import PropTypes from "prop-types";

class Accordion extends Component {
  // static propTypes = {
  //   allowMultipleOpen: PropTypes.bool,
  //   children: PropTypes.instanceOf(Object).isRequired,
  // };

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const { tableContent } = props;

    const openSections = [];

    tableContent.forEach(child => {
      openSections.push(false);
    });

    this.state = { openSections };
  }

  onClick = index => {
    const { props: { allowMultipleOpen }, state: { openSections } } = this;
    const isOpen = !!openSections[index];

    let newSections;
    if (allowMultipleOpen) {
      newSections = openSections;
      newSections[index] = !openSections[index];

    } else {
      newSections = [];
      for (let i = 0; i < openSections.length; i++) {
        if (i === index) {
          newSections.push(!openSections[index]);
        } else {
          newSections.push(false);
        }
      }
    }

    this.setState({
      openSections: newSections,
    });
  };

  render() {
    const {
      onClick,
      props: { tableContent, TableElement },
      state: { openSections },
    } = this;

    console.log('====>', tableContent);

    return (
      <div>
        <div className="instancesHeader">Instances</div>
        {
          tableContent.map((item, index) => {
            const thisProps = {
              ...item,
              tableIndex: index,
              isOpen: openSections[index],
              onClick,
            };

            return (
            <TableElement {...thisProps} />);
          })
        }
        <div className="instancesFooter">
          <i class="fas fa-chevron-right"></i>
          <span className="text">01 of 3</span>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    )

    // return (
    //   <div>
    //     <div className="instancesHeader">Instances</div>
    //     {children.map(child => (
    //       <AccordionSection
    //         isOpen={!!openSections[child.label]}
    //         label={child.label}
    //         onClick={onClick}
    //       >
    //         {child.children}
    //       </AccordionSection>
    //     ))}
    //     <div className="instancesFooter">
    //       <i class="fas fa-chevron-right"></i>
    //       <span className="text">01 of 3</span>
    //       <i class="fas fa-chevron-right"></i>
    //     </div>
    //   </div>
    // );

  }
}

export default Accordion;
