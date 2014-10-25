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
      url: 'http://developer.echonest.com/api/v4/song/search',
      dataType: 'json',
      type: 'GET',
      data: {
        api_key: 'GASA0WIIJLEC8ZPM4',
        artist: tag,
      },
      success: function(data){
        console.log('success',data);
        $('ul.results').empty();
        
        for(var i = 0; i < data.response.songs.length; i++){
            var artist = data.response.songs[i].artist_name,
                song_name = data.response.songs[i].title;
            
            $('ul.results').append("<li>Artist: "+ artist +", Song Name: "+ song_name +"</li>"); 
        }
      },
      error: function(data){
        console.log('error',data);
         $('#app').append(data[10].user_id);
      }
    });
}