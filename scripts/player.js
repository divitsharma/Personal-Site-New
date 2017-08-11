
var popup = document.getElementById('VideoPopup');
popup.style.visibility = 'hidden';

var play_trkr = document.querySelector('.obj-trkr-graphic button');
play_trkr.addEventListener('click', function (ev) {
  popup.style.visibility = 'visible';
})
