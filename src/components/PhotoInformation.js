import React from 'react';
import '../css/FlickrPhoto.css';


export default class PhotoInformation extends React.Component{
    render(){
        var image = this.props.image;
        
        return(
            <div className="caption" >
                <div style={{fontSize: "15px", fontWeight: "bold"}}>{image.caption}</div>
                <div className="tagName" >
                    <span>{"bởi "}</span>
                    <span style={{ fontWeight: "bold", fontSize: "14px" }}>{image.ownername}</span>
                </div>
                <div className="tagView">
                    <span className="view" style={{ fontSize: "17px" }}>{image.views}</span>
                    <span className="fa fa-eye" style={{paddingLeft: "3px"}}></span>
                </div>
            </div>
        );
    }
}


