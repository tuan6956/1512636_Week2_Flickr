import SearchTag from './index'
import * as actions from '../constants/ActionType'

describe('tag actions', () => {

    it('should handle initial state', () => {
        expect(
            SearchTag(undefined, {})
        ).toEqual({ "SearchTag": { "hasMore": true, "images": [], "page": 0, "perPage": 20, "storeTag": "", "tag": "" } })
    })

    it('should handle SEND_NEW_TAG - 1', () => {
        expect(
            SearchTag(undefined, { type: actions.SEND_NEW_TAG, text: "tag" })
        ).toEqual({ "SearchTag": { "hasMore": true, "images": [], "page": 0, "perPage": 20, "storeTag": "tag", "tag": "tag" } })
    })

    it('should handle SEND_NEW_TAG - 2', () => {
        expect(
            SearchTag({
                SearchTag: {
                    tag: "tag-old",
                    storeTag: "tag-old",
                    images: [2, 3],
                    page: 3,
                    perPage: 20,
                    hasMore: true
                }
            }, {
                    type: actions.SEND_NEW_TAG,
                    text: "tag-new"
                })
        ).toEqual({ "SearchTag": { "hasMore": true, "images": [], "page": 0, "perPage": 20, "storeTag": "tag-new", "tag": "tag-new" } })
    })

    it('should handle INSERT_IMAGE_FETCH - 1', () => {
        expect(
            SearchTag(undefined, {
                type: actions.INSERT_IMAGE_FETCH,
                images: [1, 2, 3],
                page: 2,
                hasMore: true
            })
        ).toEqual({ "SearchTag": { "hasMore": true, "images": [1, 2, 3], "page": 2, "perPage": 20, "storeTag": "", "tag": "" } })
    })

    it('should handle INSERT_IMAGE_FETCH - 2', () => {
        expect(
            SearchTag({
                SearchTag: {
                    tag: "tag",
                    storeTag: "tag",
                    images: [1, 2],
                    page: 0,
                    perPage: 20,
                    hasMore: true
                }
            }, {
                    type: actions.INSERT_IMAGE_FETCH,
                    images: [4, 5],
                    page: 1,
                    hasMore: false
                })
        ).toEqual({ "SearchTag": { "hasMore": false, "images": [1, 2, 4, 5], "page": 1, "perPage": 20, "storeTag": "tag", "tag": "tag" } })
    })

    it('should handle STORE_TAG_CHANGE - 1', () => {
        expect(
            SearchTag({
                SearchTag: {
                    tag: "tag",
                    storeTag: "tag",
                    images: [],
                    page: 0,
                    perPage: 20,
                    hasMore: true
                }
            }, {
                    type: actions.STORE_TAG_CHANGE,
                    tag: "text-tag"
                })
        ).toEqual({ "SearchTag": { "hasMore": true, "images": [], "page": 0, "perPage": 20, "storeTag": "text-tag", "tag": "tag" } })
    })
    
    it('should handle STORE_TAG_CHANGE - 2', () => {
        expect(
            SearchTag({
                SearchTag: {
                    tag: "tag",
                    storeTag: "",
                    images: [1,2],
                    page: 0,
                    perPage: 20,
                    hasMore: true
                }
            }, {
                    type: actions.STORE_TAG_CHANGE,
                    tag: "text-tag"
                })
        ).toEqual({ "SearchTag": { "hasMore": true, "images": [1,2], "page": 0, "perPage": 20, "storeTag": "text-tag", "tag": "tag" } })
    })
})
