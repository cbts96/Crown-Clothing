import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopSections = createSelector(
  [selectShop],
  shop => shop.collections
);
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopSections],
    (collections) => (collections? collections[collectionUrlParam]:null)
  );
  export const selectCollectionsForPreview = createSelector(
    [selectShopSections],
    collections =>collections? Object.keys(collections).map(key => collections[key]):[]
  );
  export const selectIsCollectionFetching=createSelector(
    [selectShop],
    shop=>shop.isFetching
  )
  export const selectShopSectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );