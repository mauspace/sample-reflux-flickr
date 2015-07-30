import React from "react";
import Reflux from "reflux";
import ImageStore from "../stores/ImageStore";

let ImageGrid = React.createClass({
    mixins: [Reflux.connect(ImageStore, "imagestore")],

    render: function() {
        if (this.state.imagestore) {
            return <div > {
                this.state.imagestore.map(function(image) {
                    return <div className = "image" >
                        < a href = {
                            'https://farm' + image.farm + '.static.flickr.com/' +
                                image.server + '/' + image.id + '_' + image.secret + '_b.jpg'
                        } >
                        < img src = {
                            'https://farm' + image.farm + '.static.flickr.com/' +
                                image.server + '/' + image.id + '_' + image.secret + '_s.jpg'
                        }
                    /></a >

                    < /div>

                })
            } < /div>
        } else {
            return <p > Loading Images... < /p>
        }
    }
});



export default ImageGrid;