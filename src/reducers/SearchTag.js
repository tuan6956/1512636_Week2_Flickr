
import {
    SEND_NEW_TAG,
    INSERT_IMAGE_FETCH,
    STORE_TAG_CHANGE
} from '../constants/ActionType'

const defaultStateSearchTag = { tag: "", storeTag: "", images: [], page: 0, perPage: 20, hasMore: true };
const doSearch = (state = defaultStateSearchTag, action) => {
    switch (action.type) {
        case SEND_NEW_TAG:
            return {tag: action.text, storeTag: action.text, images: [], page: 0, perPage: 20, hasMore: true };
        case STORE_TAG_CHANGE:
            return {tag: state.tag, storeTag: action.tag ,images: [...state.images], page: state.page, perPage: 20, hasMore: state.hasMore};
        case INSERT_IMAGE_FETCH:
            return {
                tag: state.tag,
                images: [...state.images, ...action.images], 
                page: action.page, 
                perPage: 20, 
                hasMore: action.hasMore,
                storeTag: state.storeTag
            }
        default:
            return state;
    }
}
export default doSearch;
