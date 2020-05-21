import React from "react";
import "./Directory.scss";
import MenuItem from "../Menu-item/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { directorySection } from "../../Redux/Directory/directorySelector";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherprops }) => {
      return <MenuItem key={id} {...otherprops} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: directorySection,
});

export default connect(mapStateToProps, null)(Directory);
