// When the user scrolls the page, execute myFunction
window.onscroll = function() {addClassOnScroll()};

// Get the nav bar
var header = document.getElementById("fixed-nav");
var secondSection = document.getElementById("product-section");

// Get the offset position of the navbar
var sticky = secondSection.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addClassOnScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Get the root tag
var root = document.getElementsByTagName( 'html' )[0];
// Show navigation menu
function showNav() {
    root.classList.add('_show-nav');
}
// Hide navigation menu
function hideNav() {
    root.classList.remove('_show-nav');
}

// Toggle class _active by clicking on interactive "haylage__item-wrap" item
var tagItems = document.querySelectorAll('.haylage__item');
[].forEach.call(tagItems, function(el, i, tagItems) {
    el.addEventListener('click', function() {
        [].forEach.call(tagItems, function(el) {
            if(el !== this) {
                el.parentNode.classList.remove("_active");
            } else {
                el.parentNode.classList.toggle("_active");
            }
        }, this);
    });
});

function _removeClasses() {
    var haylageModal = document.querySelectorAll('.haylage__item-wrap');
    [].forEach.call(haylageModal, function(el) {
        el.classList.remove("_active");
    }, this);
}

// Toggle class _active by clicking on interactive "delivery__buttons-item-link" item
var tagItems = document.querySelectorAll('.delivery__buttons-item-link');
[].forEach.call(tagItems, function(el, i, tagItems) {
    el.addEventListener('click', function() {
        [].forEach.call(tagItems, function(el) {
            if(el !== this) {
                el.parentNode.classList.remove("_active");
            } else {
                el.parentNode.classList.toggle("_active");
            }
        }, this);
    });
});

function _removeClassesDelivery() {
    var haylageModal = document.querySelectorAll('.delivery__buttons-item');
    [].forEach.call(haylageModal, function(el) {
        el.classList.remove("_active");
    }, this);
}

// Toggle class _active by clicking on interactive "product__cards-item-inner" item
var tagItems = document.querySelectorAll('.product__cards-item-inner');
[].forEach.call(tagItems, function(el, i, tagItems) {
    el.addEventListener('click', function() {
        [].forEach.call(tagItems, function(el) {
            if(el !== this) {
                el.parentNode.classList.remove("_active");
            } else {
                el.parentNode.classList.toggle("_active");
            }
        }, this);
    });
});

function _removeClassesProduct() {
    var haylageModal = document.querySelectorAll('.product__cards-item');
    [].forEach.call(haylageModal, function(el) {
        el.classList.remove("_active");
    }, this);
}