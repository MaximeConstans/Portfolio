$(document).ready(function() {
    $(function(){
        $('img.logo-medias').hover(zoom,dezoom);
        function zoom() {
        $(this).attr('title','');
        let $img = $(this).attr("src");
        $( '<div id="zoom"></div>' ).appendTo( "body" );
        $("#zoom").fadeIn();
        $('#zoom').append('<img src="'+$img +'" alt="" width="200px">');
        $('body').mousemove(function(event) {
            $('#zoom').css("top", event.pageY - 200);
            $('#zoom').css("left", event.pageX - 270 );
        });

    }

        function dezoom() {
        let $title = $('#zoom p').text();
        $(this).attr('title',$title);
        $("#zoom").fadeOut();
        $('#zoom').remove();
    }
    })

});
