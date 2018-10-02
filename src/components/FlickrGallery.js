import React from 'react';
import Gallery from 'react-grid-gallery';
import PhotoInformation from './PhotoInformation';

export default class FlickrGallery extends React.Component{
    render(){
        var images = this.props.images.map( image => {
            image.customOverlay = (<PhotoInformation image={image}/>);
            return image;
        });
        return(<Gallery images={images} enableImageSelection={false} backdropClosesModal={true}  rowHeight={282}/>   );
    }
}