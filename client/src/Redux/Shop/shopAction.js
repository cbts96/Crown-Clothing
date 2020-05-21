import { actionsTypes } from "./actionTypes";
// import {
//   firestore,
//   convertCollectionSnapshotToMap,
// } from "../../Firebase/FirebaseUtil";

export const FetchCollectionStart = () => ({
  type: actionsTypes.FETCHCOLLECTIONSSTARTS,
});
export const FetchCollectionSuccess = (collectionMap) => ({
  type: actionsTypes.FETCHCOLLECTIONSSSUCCESS,
  payload: collectionMap,
});
export const FetchCollectionFailure = (errorMessage) => ({
  type: actionsTypes.FETCHCOLLECTIONSFAILURE,
  payload: errorMessage,
});
export const FetchCollectionStartAsync = () => {
  return (dispatch) => {
    // const collectionRef = firestore.collection("collections");
    // dispatch(FetchCollectionStart());

    // collectionRef
    //   .get()
    //   .then((snapshot) => {
    //     const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //     dispatch(FetchCollectionSuccess(collectionMap));
    //   })
    //   .catch((error) => dispatch(FetchCollectionFailure(error.message)));
  };
};
