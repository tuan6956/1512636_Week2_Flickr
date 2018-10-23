
import React, { Component } from 'react'
import queryString from 'query-string'
import axios from 'axios';
import FlickrTag from '../components/FlickrTag'
import { connect } from 'react-redux'
import { insertImageFetch, storeTag, sendNewTag } from '../actions'

const apiKey = "0e2b6aaf8a6901c264acb91f151a3350";

class FlickrTagContainer extends Component {
    constructor(props) {
        super(props);

        this.getPhoto = this.getPhoto.bind(this)
    }

    getPhoto(page){
        var tag = this.props.tag;
        // if(page >= 2){
        //     return;
        // }
        if(!tag){
            tag = queryString.parse(this.props.location.search).tag;
            this.props.dispatch(sendNewTag(tag));
        }
        
        let link = `https://api.flickr.com/services/rest/?format=json&sort=random&method=flickr.photos.search&tags=${tag}&tag_mode=all&per_page=20&api_key=${apiKey}&nojsoncallback=1&extras=views%2C+owner_name%2C+url_z&page=${page}`;
        axios.get(link).then(res => {
            if (res.data.stat !== "ok") {
                return;
            }
            let images = res.data.photos.photo.map(photo => {
                let srcImage = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
                return {
                    src: srcImage,
                    thumbnail: photo.url_z,
                    thumbnailWidth: photo.width_z,
                    thumbnailHeight: photo.height_z,
                    caption: photo.title,
                    ownername: photo.ownername,
                    views: photo.views,
                    id: photo.id,
                };
            });
            let hasMore = page < res.data.photos.pages ? true : false;
        
            this.props.dispatch(insertImageFetch(images, page + 1, hasMore))
        })
    }
    

    render() {
        return (
            <FlickrTag getPhoto={this.getPhoto} hasMore={this.props.hasMore} images={this.props.images} tag={this.props.tag} page={this.props.page}/>
        )
    };
}

function mapStateToProps(state) {
    console.log(state);
    return { tag: state.SearchTag.tag, 
        images: [...state.SearchTag.images], 
        page: state.SearchTag.page, 
        perPage: state.SearchTag.perPage, 
        hasMore: state.SearchTag.hasMore 
    };
}

export default connect(mapStateToProps)(FlickrTagContainer)
