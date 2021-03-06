import React from 'react';
import FlickrGallery from './FlickrGallery';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import ReactLoading from "react-loading";

const apiKey = "84fa21db4402dcc66c64fd143d16fb8f";
const maxHeight = 282;
export default class FlickrExplore extends React.Component {
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

    getPhoto(page) {
        let link = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&date=2018-10-21&api_key=${apiKey}&extras=views%2C+owner_name%2C+url_z&per_page=20&page=${page}&format=json&nojsoncallback=1`;
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
        <div className="container-photo" >
                <div className="loader" key={0}>
                    <ReactLoading type={this.type} color="black" height={100} width={100} />
                </div>
             </div>
        return (
            <InfiniteScroll className="body" pageStart={0} loadMore={this.getPhoto} hasMore={this.state.hasMore} loader={loader}>
                <FlickrGallery images={this.state.images} />
                <div style={{ color: "#f3f5f6" }}> div </div>
            </InfiniteScroll>
        )
    };
}

