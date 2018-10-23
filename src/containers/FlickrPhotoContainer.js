import { connect } from 'react-redux'
import FlickrPhoto from '../components/FlickrPhoto'
import { sendNewTag } from '../actions'
export default connect(null, {sendNewTag})(FlickrPhoto)