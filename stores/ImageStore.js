import Reflux from "reflux";
import ImageActions from "../actions/ImageActions";

let ImageStore = Reflux.createStore({
url: "https://api.flickr.com/services/rest/",
listenables: [ImageActions],
imagelist: [],
init: function(){
this.fetchList("10");
},
fetchList: function(values){
  let pageN = values;
	let tags = ['2010-09-04' , '2011-09-04' , '2012-04-04','2013-04-04','2014-04-04','2015-04-04'];
	let randomTag = tags[Math.floor(Math.random()*tags.length)];
$.ajax({
	url: this.url ,
	data: {
            format: 'json',
            per_page: `${pageN}`,
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3',
            date: `${randomTag}`
           
        },
	dataType: "jsonp",
	jsonpCallback: "jsonFlickrApi",
	cache:false,
	context: this,
    success: function(data){
   this.imagelist = data.photos.photo;
   this.trigger(this.imagelist);

    }


})
}
});

export default ImageStore;

