import React from 'react';
import ImageGrid from './components/ImageGrid';
import Header from './components/Header';
import RangeSlider from './components/RangeSlider';
import ImageActions from './actions/ImageActions';

var App = React.createClass({
  getInitialState: function() {
    return {

    }
  },
  rangeChangeHandler: function(values) {
    //this.setState({min: values[0], max: values[1], page: 1},);
    ImageActions.fetchList(values);

  },
  render: function() {
    return (
     <div>
      <Header text = "" / >
      <div className = "center-block trim" >
      <RangeSlider label = "Number of Image" min = {0} max = {100} step = {1} onChange = {this.rangeChangeHandler}/>
      </div> 
      <ImageGrid / >
      </div>
    )
  }
});

React.render( < App / > , document.getElementById('container'));