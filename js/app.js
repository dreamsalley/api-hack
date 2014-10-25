 //http://developer.echonest.com/api/v4/artist/search?api_key=FILDTEOIK2HBORODV&format=json&results=10&name=train&bucket=id:whosampled
$(document).ready(function() {
    $('input').keydown(function(e) {
        if (e.which == 13) {
            whosampled($(this).val());
        }
    });
});

function whosampled(tag){
    $.ajax({
      url: 'http://developer.echonest.com/api/v4/artist/search',
      dataType: 'json',
      type: 'GET',
      data: {
        api_key: 'GASA0WIIJLEC8ZPM4',
        results: 1,
        name: tag,
        bucket: 'id:whosampled'
      },
      success: function(data){
        console.log('success',data);
        $('ul.results').empty();
          
        //Split response from whosampled:artist:#### into array to pull the ####
        var foreignId = data.response.artists[0].foreign_ids[0].foreign_id.split(':');
          
        //Then we can build the url and append it to the screen
        $('ul.results').append("<li><iframe src='http://www.whosampled.com/artist/view/"+ foreignId[2] +"/'></iframe></li>"); 
      },
      error: function(data){
        console.log('error',data);
         $('#app').append(data[10].user_id);
      }
    });
}