import React from "react";

import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollectionsForPreview} from "../../Redux/Shop/shopSelector";

const CollectionOverview=({collections})=>(
    <div className="collection-overview">
    {collections.map(({ id, ...otherprops }) => {
      return <CollectionPreview key={id} {...otherprops} />;
    })}
  </div>
)
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionsForPreview
  });
export default connect(mapStateToProps, null)(CollectionOverview);