import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...orterSectionProps }) => (
      <MenuItem key={id} {...orterSectionProps} />
    ))}
  </div>
);

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStatetoProps)(Directory);
