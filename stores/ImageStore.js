import Reflux from "reflux";
import $ from "jquery";
import ImageActions from "../actions/ImageActions";

let ImageStore = Reflux.createStore({
url: "https://api.flickr.com/services/rest/",
listenables: [ImageActions],
imagelist: [],
init: function(){
this.fetchList();
},
fetchList: function(){
	let tags = ['2010-09-04' , '2011-09-04' , '2012-04-04','2013-04-04','2014-04-04','2015-04-04'];
	let randomTag = tags[Math.floor(Math.random()*tags.length)];
$.ajax({
	url: this.url ,
	data: {
            format: 'json',
            per_page: '100',
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3',
            date: `${randomTag}`
           // api_key: `${randomTag}` // jshint ignore:line
        },
	dataType: "jsonp",
	jsonpCallback: "jsonFlickrApi",
	cache:false,
	context: this,
    success: function(data){
    console.log("OK...."  );
   
   this.imagelist = data.photos.photo;
   this.trigger(this.imagelist);

    }


})
}
});

export default ImageStore;

