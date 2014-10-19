document.onload = function() {
  SC.initialize({
    client_id: "'YOUR_CLIENT_ID"
  });
};

function getTracks(q) {
  SC.get("/tracks", {
    q: q
  }, function(tracks) {
    console.log(tracks);
  });
};

function getQ() {
  //var a = document.getElementById("song-input");
  var b = $("#song-input").val();
  var noName = /\S\w/;
  console.log(b);
    if(!noName.test(b) || b == ""){
      console.log(b);
      return false;
    } else {
      console.log(b);
      $("song-input").html("<h1>Searching for:" + b +"</h1>");
      return b;
    };
    
  };

$(document).ready(function() {
  $("#song-input").on("keyDown", function() {
    event.preventDefault();
    var nQ = getQ();
    var validQuery = someQuery(nQ);
    getTracks(validQuery);
  });
  
  $("#song-input").on("keyUp", function(event) {
    if(event.which == 13){
      event.preventDefault();
      var nQ = getQ();
      var validQuery = someQuery(nQ);
      getTracks(validQuery);
    };
  
  });
});