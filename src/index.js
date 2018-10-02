 import React from 'react';
 import ReactDOM from 'react-dom';
 import Flickr from './components/Flickr'



// function Square() {
//         return (
//           <div className= {"123"}>123123
//           </div>
//         );
//     }

// class Game extends React.Component {
//         constructor(props){
//                 super(props);
//                 this.state = {
//                         images: IMAGES
//                 }
//         }
//         // fillImages(){
//         //         this.setState({
//         //                 images: IMAGES
//         //         });
//         // }
//         render () {
//                 return (
//                         <Gallery images={this.state.images}/>   
//                 )
//         }
// }
// const IMAGES =
// [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 174,
//         isSelected: true,
//         caption: "After Rain (Jeshu John - designerspics.com)",
//         customOverlay: (<Square/>),
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "Boats (Jeshu John - designerspics.com)"
// },

// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 320,
//         thumbnailHeight: 212
// }]

 ReactDOM.render(<Flickr />, document.getElementById('root'));
