function carousel () {
    var container = document.querySelector('.carousel-container');
    var items = container.querySelectorAll('.carousel-items li');
    var selectors = container.querySelectorAll('.selectors button');

    var current = container.querySelector('.current');

    var current_button = container.querySelector('.current-button');

    function setActive(ind) {
        if (current != null) {
            current.classList.remove('current');
        }
        if (current_button != null) {
            current_button.classList.remove('current-button');
        }
        items[ind].classList.add('current');
        selectors[ind].classList.add('current-button');
        current = items[ind];
        current_button = selectors[ind];

        var next_ind = ind + 1;
        if (next_ind == selectors.length) next_ind = 0;

        // setTimeout(function () {
        //     setActive(next_ind)
        // }, 5000); // NOTE: DELAY DOES NOT WORK IF ANYTHING IS CLICKED!!
    }

    setActive(3);

    selectors[0].addEventListener('click', function (ev) {
        setActive(0);
    });
    selectors[1].addEventListener('click', function(ev) {
        setActive(1);
    });
    selectors[2].addEventListener('click', function (ev) {
        setActive(2);
    });
    selectors[3].addEventListener('click', function (ev) {
        setActive(3);
    });
    selectors[4].addEventListener('click', function (ev) {
        setActive(4);
    });




};

var carousel_reached = false;

var about = document.getElementById('About');
var art = document.getElementById('Art');
var carousel_trigger_height = about.clientHeight +
                              (0.4*art.clientHeight);

// NOTE: Offset width doesnt work for large screens, where people have to scroll less
function scrollHandle (ev) {

  if (!carousel_reached && window.pageYOffset > carousel_trigger_height) {
    carousel();
    carousel_reached = true;
  }
}

window.onscroll = scrollHandle;
