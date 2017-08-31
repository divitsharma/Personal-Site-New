
// addEventListener doesnt work for ie < 9
// use attachevent instead, but dont use .onload
window.addEventListener('load', function() {
  // The entire video popup div
  var popup = document.getElementById('VideoPopup');
  // popup.classList.add("visible");

  // The actual video
  var video = popup.querySelector('video');

  // The cross button
  var exit_popup = popup.querySelector('.popup-exit-btn');
  exit_popup.addEventListener('click', function (ev) {
    popup.classList.remove('visible')
  });

  // The play button
  var play = popup.querySelector('.play-toggle');
  play.addEventListener('click', function (ev) {
    if (video.paused) {
      video.play();
      play.classList.add('pause');
    } else {
      video.pause();
      play.classList.remove('pause');
    }

  });

  var seek_outer = popup.querySelector('.seek-outer');
  var seek_inner = popup.querySelector('.seek-inner');
  var wrap = popup.querySelector('.video-wrap');
  seek_outer.addEventListener('click', function (ev) {
    var perc = (ev.pageX - wrap.offsetLeft) / wrap.offsetWidth;
    video.currentTime = perc * video.duration;
  });

  video.addEventListener('timeupdate', function () {
    var perc = (video.currentTime / video.duration) * 100;
    seek_inner.style.width = Math.floor(perc) + '%';

  });



  // The play button under the project graphic
  var play_trkr = document.querySelector('.obj-trkr-graphic button');
  play_trkr.addEventListener('click', function (ev) {
    popup.classList.add('visible');
  });
});
