
import {
    SEND_NEW_TAG,
    INSERT_IMAGE_FETCH,
    STORE_TAG_CHANGE
} from '../constants/ActionType'

export const sendNewTag = text => ({
    type: SEND_NEW_TAG,
    text
});
export const insertImageFetch = (images, page, hasMore ) => ({
    type: INSERT_IMAGE_FETCH,
    images, 
    page,
    hasMore
});
export const storeTagChange = (tag) => ({
    type: STORE_TAG_CHANGE,
    tag
});
// export const setTag = text => ({
//     type: SET_TAG,
//     text
// });