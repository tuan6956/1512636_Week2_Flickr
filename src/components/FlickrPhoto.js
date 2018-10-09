import React, {Component} from 'react';
import axios from 'axios';
import ReactLoading from "react-loading";
import '../css/FlickrPhoto.css';
import {withRouter} from "react-router-dom";

const api_key = "f37e96732f6075d33fc9f734702eaf7d";
class Photo extends Component {
    constructor(props) {
        super(props);
        this.state={
            imageSize: null,
            imageInfo:null,
            numberFav:0,
            isload: true
        }
        this.loadImage = this.loadImage.bind(this);
    }
    type = "spokes";

    async loadImage(id){
        console.log(id);
        let urlSize = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${api_key}&photo_id=${id}&format=json&nojsoncallback=1`;
        let urlInfo = `https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${api_key}&photo_id=${id}&format=json&nojsoncallback=1`;
        let urlFav = `https://api.flickr.com/services/rest/?method=flickr.photos.getFavorites&api_key=${api_key}&photo_id=${id}&format=json&nojsoncallback=1`
        await axios.get(urlSize)
        .then((res)=>{
            this.setState({
                imageSize:res.data.sizes.size[8],
            })
        })

        await axios.get(urlInfo)
        .then((res)=>{
            this.setState({
                imageInfo:res.data.photo,
            })
        })

        await axios.get(urlFav)
        .then((res)=>{
            this.setState({
                numberFav:res.data.photo.total,
            })
        })
    }

    goToPageTags(tagRaw){
        this.props.history.push('/photos?tag=' + tagRaw)
    }

    render() {
        if(this.state.isload){
            const id = this.props.match.params.id;
            this.loadImage(id);
            this.setState({
                isload:false,
            })
        }
        return (
            <div className="main-photo">
                {(this.state.imageSize === null) || (this.state.imageInfo === null) ?
                    (
                        <div className="loader" key={0}>
                            <ReactLoading type={this.type} color="black" height={100} width={100}/>
                        </div>
                    )
                    :
                    (
                        <div className="container-photo">
                            <div className="photo">
                                <img src={this.state.imageSize.source}></img>
                            </div>
                            <div className="content">
                                <div className="content-left">
                                    <div className="owner-name-photo">
                                        {this.state.imageInfo.owner.username}
                                    </div>
                                    <div className="title-photo">
                                        bởi {this.state.imageInfo.title._content}
                                    </div>
                                    <div className="discription">
                                        {this.state.imageInfo.description._content}
                                    </div>
                                </div>

                                <div className="content-right">
                                    <div className="view">
                                        <div className="number-item">
                                            {this.state.imageInfo.views}
                                        </div>
                                        <div className="text-item">
                                            views
                                        </div>
                                    </div>

                                    <div className="fav">
                                        <div className="number-item">
                                            {this.state.numberFav}
                                        </div>
                                        <div className="text-item">
                                            favorite
                                        </div>
                                    </div>
                                    <div className="comments">
                                        <div className="number-item">
                                            {this.state.imageInfo.comments._content}
                                        </div>
                                        <div className="text-item">
                                            comments
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-tag">
                                {
                                    this.state.imageInfo.tags.tag.map((tag)=>{
                                        return(
                                            <div key={tag.id} className="tag" onClick={()=>{this.goToPageTags(tag.raw)}}>{tag.raw}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>

        );
    }
}

export default withRouter(Photo);