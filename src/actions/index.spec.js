import * as actions from './index'

describe('tag actions', () => {
    
  it('sendNewTag should create SEND_NEW_TAG action', () => {
    expect(actions.sendNewTag('text-tag')).toEqual({
        type: 'SEND_NEW_TAG',
        text: 'text-tag', 
    })
  })

  it('insertImageFetch should create INSERT_IMAGE_FETCH action with array image null', () => {
    expect(actions.insertImageFetch([], 1, true)).toEqual({
      type: 'INSERT_IMAGE_FETCH',
      images: [],
      page: 1,
      hasMore: true
    })
  })

  it('insertImageFetch should create INSERT_IMAGE_FETCH action with array image not null', () => {
    expect(actions.insertImageFetch([1,2,3], 1, true)).toEqual({
      type: 'INSERT_IMAGE_FETCH',
      images: [1,2,3],
      page: 1,
      hasMore: true
    })
  })

  it('storeTagChange should create STORE_TAG_CHANGE action', () => {
    expect(actions.storeTagChange('text-tag')).toEqual({
        type: 'STORE_TAG_CHANGE',
        tag: 'text-tag', 
    })
  })
})
