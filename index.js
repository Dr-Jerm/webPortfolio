
populatePortfolio = function(){
    var list = $('#portList');

    for( i in videosJSON){
        var vid = videosJSON[i];
        var element = '<div class="imgholder"><img src="images/'+ vid.videoImage +'" alt="" /></div>'+
          '<p class="title">'+ vid.title +'</p>'+
          '<p class="projectdescription">'+ vid.description +'</p>'+
          '<p class="readmore"><a href="#"><strong>View The Full Project &raquo;</strong></a></p>'
        $('#portList').append(element);
    }
}