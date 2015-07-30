import React from "react";
import Reflux from "reflux";
import ImageStore from "../stores/ImageStore";

let Header = React.createClass({
    mixins: [Reflux.connect(ImageStore, "imagestore")],

    render: function() {
        return ( < div className = "navbar navbar-default navbar-static-top"
            role = "navigation" >
            < div className = "container" >
            < div className = "navbar-header" > {
                this.props.text
            } < /div> < /div> < /div>
        );
    }

});



export default Header;