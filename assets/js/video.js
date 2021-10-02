var video = document.getElementById('video-bg');

$(window).on('resize', ajustFrameHeight);
$(video).on('playing', ajustFrameHeight);

function ajustFrameHeight() {
    var videoHeight = $(video).height();
    $(".video-frame").height(videoHeight);
}

$(window).trigger('resize');

video.play();