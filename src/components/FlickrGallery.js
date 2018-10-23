import React from 'react';
import Gallery from 'react-grid-gallery';
import PhotoInformation from './PhotoInformation';
import {withRouter} from "react-router-dom";

 class FlickrGallery extends React.Component{
    constructor(props){
        super(props);
        this.onSelectedImage = this.onSelectedImage.bind(this);
    }
    onSelectedImage(index) {
        var image = this.props.images[index];
        this.props.history.push('photos/' + image.id);
    }
    render(){
        var images = this.props.images.map( image => {
            image.customOverlay = (<PhotoInformation image={image}/>);
            return image;
        });
        return(<Gallery images={images} onClickThumbnail={this.onSelectedImage} enableImageSelection={false} backdropClosesModal={true}  rowHeight={282}/>  );
    }
}
export default withRouter(FlickrGallery);