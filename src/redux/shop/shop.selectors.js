import { createSelector } from 'reselect';


/* const COLLECTION_ID_MAP = {
 hats: 1,
sneakers: 2,
 jackets: 3,
   womens: 4,
   mens: 5
};
 */
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])

    /* object.key is a function that stores the object formed data
    in array format */

    );

export const selectCollection = collectionURLParam =>
 createSelector(
     [selectCollections],
    collections => collections[collectionURLParam]
     /* converting the data stored in array into an object to store the 
     data is called Data Normalization */
    /*  collections => collections.find(
         collection => collection.id === COLLECTION_ID_MAP[collectionURLParam] */
     );

