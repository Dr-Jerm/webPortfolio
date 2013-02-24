
populatePortfolio = function(){
    var list = $('#portList');

    for( i in videosJSON){
        var vid = videosJSON[i];
        var element = '<div class="imgholder"><img src="images/'+ vid.videoImage +'" alt="" /></div>'+
          '<p class="title">'+ vid.title +'</p>'+
          '<p class="projectdescription">'+ vid.description +'</p>'+
          '<p class="readmore"><a target="_blank" href="http://www.youtube.com/watch?v='+ vid.youtubeCode  +'"><strong>View The Full Project &raquo;</strong></a></p>'
        $('#portList').append(element);
    }

//    var bioText = '<p>' + bio.description + '</p>';
//    $('#about_me_div').append(bioText);
}