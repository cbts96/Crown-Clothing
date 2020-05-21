import React, { useEffect } from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import { FetchCollectionStart } from "../../Redux/Shop/shopAction";
import CollectionOverviewContainer from "../CollectionOverview/CollectionOverviewContainer";
import CollectionContainer from "../Collection/CollectionContainer";

const Shop=({fetchCollectionStart,match})=> {
 useEffect(()=>{
    
  fetchCollectionStart();
},[fetchCollectionStart])

  
    

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCollectionStart: () => {
      dispatch(FetchCollectionStart());
    },
  };
};

export default connect(null, mapDispatchToProps)(Shop);
