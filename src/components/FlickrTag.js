import React from 'react';
import FlickrGallery from './FlickrGallery';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { insertImageFetch } from '../actions'
import '../css/FlickrTag.css'
import ReactLoading from "react-loading";


//import queryString from 'query-string'

const apiKey = "0e2b6aaf8a6901c264acb91f151a3350";
const maxHeight = 282;

export default class FlickrTag extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        let tags = this.props.tag;
        console.log(tags);
        var loader =
             <div className="container-photo" >
                <div className="loader" key={0}>
                    <ReactLoading type={this.type} color="black" height={100} width={100} />
                </div>
             </div>

        return (
            <InfiniteScroll className="body" pageStart={0} loadMore={this.props.getPhoto} hasMore={this.props.hasMore} loader={loader}>
                <div className="tagSearch">Result in tag: {this.props.tag} </div>
                <FlickrGallery images={this.props.images} />
                {/* <div style={{ color: "#f3f5f6" }}> div </div> */}
            </InfiniteScroll>
        )
    };

}


