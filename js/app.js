//http://developer.echonest.com/api/v4/artist/search?api_key=FILDTEOIK2HBORODV&format=json&results=10&name=train&bucket=id:whosampled
$(function() {
$.ajax({
  url: 'http://developer.echonest.com/api/v4/artist/search',
  dataType: 'json',
  type: 'GET',
  data: {
    api_key: 'GASA0WIIJLEC8ZPM4',
    format: 'jsonp',
    results: 10,
    name: 'train',
    bucket: 'id:whosampled'
  },
  success: function(data){
    console.log('success',data);
  },
  error: function(data){
    console.log('error',data);
     $('#app').append(data[0].user_id);
  }
});
});