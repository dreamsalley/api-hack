//http://developer.echonest.com/api/v4/artist/search?api_key=FILDTEOIK2HBORODV&format=json&results=10&name=train&bucket=id:whosampled
$(function() {
$.ajax({
  url: 'http://developer.echonest.com/api/v4/artist/search',
  dataType: 'json',
  type: 'GET',
  data: {
    api_key: 'GASA0WIIJLEC8ZPM4',
    results: 10,
    name: 'train',
    bucket: 'id:whosampled'
  },
  success: function(data){
    console.log('success',data);
  },
  error: function(data){
    console.log('error',data);
     $('#app').append(data[10].user_id);
  }
});
});

var accessToken = '5e67feb6e6ec0bb3adbbb1b356c93148 ';
var tag;

function whosampled(tag){
  $.ajax({
      url: 'http://developer.echonest.com/api/v4/artist/search' + tag + '/artist/search',
      dataType: 'json',
      type: 'GET',
      data: {api_key: GASA0WIIJLEC8ZPM4},
      success: function(data){
          console.log(data);
          $('song-input').empty();
          for(x in data.data){
            $('song-input').append(+data.data[x]);  
          }
      },
      error: function(data){
          console.log(data);
      }
  });
}

$('input').keydown(function(e){
  if(e.which == 13){
    whosampled($(this).val());
  }
});