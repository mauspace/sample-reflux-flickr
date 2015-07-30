import React from "react";
import Reflux from "reflux";
import ImageStore from "../stores/ImageStore";

let RangeSlider = React.createClass({
mixins: [Reflux.connect(ImageStore,"imagestore")],

    componentDidMount: function() {
     var $slider = $(this.refs.slider.getDOMNode()),
      changeHandler = this.props.onChange;

      $slider.noUiSlider({
            start: [10],
            connect: 'lower',
            step: this.props.step,
            range: {
                'min': this.props.min,
                'max': this.props.max
            }
        });
       //$el.noUiSlider_pips({
        //    mode: 'steps',
        //    filter: function(value) {
        //        return value == Math.floor(value);
        //    },
        //    density: 2
        //});
         $slider.Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
            $(this).html(
                '<span>' + value.substr(0, value.length - 1) + '</span>'
            );
        });
         $slider.on({
            change: function(event){
                changeHandler($slider.val());
            }
        });

     
       
    },
    render: function () {
        return (
            <div className="slider-wrapper">
                <span className="slider-label">{this.props.label}</span>
                <div ref="slider"></div>
            </div>
        );
    }
});

export default RangeSlider;