// Change background color when scrolling down to a certain point
window.onscroll = function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Change background color when scrolling down to 200 pixels
    if (scrollPosition > 200) {
        header.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = 'rgb(72, 210, 134)';
    }
};
