import React from "react";
import "./directory.styles.scss";
import MenuItems from "../menu-items/menu-item";
import SECTIONS_DATA from "./sections.data.js";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItems key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
