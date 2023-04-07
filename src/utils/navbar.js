var logoImgDesk = document.getElementsByClassName('logo')[ 0 ];
var logoImgMobile = document.getElementsByClassName('m-logo')[0];
var navElem = document.getElementsByTagName('nav')[0];
var navBarDeskElem = document.getElementsByClassName('navbar')[ 0 ];

var navbarMobile = document.getElementsByClassName('mobile')[ 0 ];

// var hamMenuElem = document.getElementById('menu');
// var hamIcon = document.getElementById('ham-icon');
var mainElem = document.getElementsByTagName('main')[0];
var contentElem = document.getElementsByClassName('content')[0];
var heroImage = document.getElementsByClassName('hero-image')[0];
var heroSlider = document.getElementsByClassName('hero-slider')[0];
var vanillaSlideshow = document.getElementById('vanilla-slideshow-container');
var pageType = document.getElementById('page-type').dataset.pageType;
var heroType = document.getElementById('hero-type').dataset.heroType;
// Global variables
const navbar_bg_color_solid = 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)';
var navbar_bg_color_trans = 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)';

const navbar_desk_height = '110px';
const navbar_desk_height_onscroll = '90px';
const navbar_mob_height = '100px';
const navbar_mob_height_onscroll = '80px';

// save scrollY position when ham menu opens
// and use it to scroll back the page below when menu closes
// issue: when mobile menu is long and user scrolls the page below also scrolls
var initial_scrollY_pos = 0;

window.scroll({ behavior: 'smooth' });

function _setnavbar_bgcolour() {
	let fromTop = window.scrollY;

	if (fromTop >= 0) {
		logoImgDesk.style.height = '60px';
		navBarDeskElem.style.height = navbar_desk_height_onscroll;
		logoImgMobile.style.height = '55px';
		navbarMobile.style.height = navbar_mob_height_onscroll;

		// setting navbar bg color to solid
		navbarMobile.style.background = navbar_bg_color_solid;
		navBarDeskElem.style.background = navbar_bg_color_solid;
		if (heroType == 'none') {
			navBarDeskElem.style.background = navbar_bg_color_solid;
			navbarMobile.style.background = navbar_bg_color_solid;
		}
	}

	if (fromTop < 1) {
		logoImgDesk.style.height = '92px';
		navBarDeskElem.style.height = navbar_desk_height;
		logoImgMobile.style.height = '68px';
		navbarMobile.style.height = navbar_mob_height;

		// setting navbar bg color to transparent
		navbarMobile.style.background = navbar_bg_color_trans;
		navBarDeskElem.style.background = navbar_bg_color_trans;
		if (heroType == 'none') {
			navBarDeskElem.style.background = navbar_bg_color_solid;
			navbarMobile.style.background = navbar_bg_color_solid;
		}
	}

	if (heroType == 'none') {
		navBarDeskElem.style.background = navbar_bg_color_solid;
		navbarMobile.style.background = navbar_bg_color_solid;
	}
}

window.addEventListener('scroll', () => {
	_setnavbar_bgcolour();
});



if (window.innerWidth > 799) {
	if (heroImage) {
		heroImage.style.marginTop = '-' + navbar_desk_height;
	}

	if (heroSlider) {
		heroSlider.style.marginTop = '-' + navbar_desk_height;
	}
}

function displayInfo(el, info) {
	el.innerHTML = ' ' + info;
}
function hideInfo(el) {
	el.innerHTML = '';
}
