
var popup = document.getElementById('VideoPopup');
popup.classList.add("visible");

var exit_popup = popup.querySelector('.popup-exit-btn');
exit_popup.addEventListener('click', function (ev) {
  popup.classList.remove('visible')
});

var play_trkr = document.querySelector('.obj-trkr-graphic button');
play_trkr.addEventListener('click', function (ev) {
  popup.classList.add('visible');
});
