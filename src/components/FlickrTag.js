import React from 'react';
import FlickrGallery from './FlickrGallery';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import queryString from 'query-string'

const apiKey = "0e2b6aaf8a6901c264acb91f151a3350";
const maxHeight = 282;
export default class FlickrTag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            page: 0,
            perPage: 20,
            hasMore: true,
        }
        this.getPhoto = this.getPhoto.bind(this)
    }
 
    componentWillReceiveProps(nextProps){
        this.setState({
            images: [],
            page: 0,
            perPage: 20,
            hasMore: true,
        });
    }

    getPhoto(page) {
        const tag = queryString.parse(this.props.location.search).tag;
        let link = `https://api.flickr.com/services/rest/?format=json&sort=random&method=flickr.photos.search&tags=${tag}&tag_mode=all&api_key=${apiKey}&nojsoncallback=1&extras=views%2C+owner_name%2C+url_z&page=${page}`;
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

            this.setState(previousState => ({
                images: previousState.images.concat(images),
                page: page,
                hasMore: page < res.data.photos.pages ? true : false,
            }));
        })
    }
    render() {
        var loader = 
            <div className="loader " style={{marginTop: maxHeight, textAlign: "center"}}  key={0}>
                <i className="fa fa-spinner fa-spin" style={{fontSize: "40px"}}> </i>
            </div> ;
        const tag = queryString.parse(this.props.location.search).tag;

        return(
            <InfiniteScroll className="body" pageStart={0} loadMore={this.getPhoto} hasMore={this.state.hasMore} loader={loader}>
                <div className="tagSearch" style={{paddingBottom: "20px"}}>Result in tag: {tag} </div>
                <FlickrGallery images={this.state.images}/>
                <div style={{color: "#f3f5f6"}}> div </div>
            </InfiniteScroll>
    )};

}