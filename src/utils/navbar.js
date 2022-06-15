var logoImgMob = document.getElementsByClassName('logo')[0];
var logoImgDesk = document.getElementsByClassName('logo')[1];
var mobileElem = document.getElementsByClassName('mobile')[0];
var navElem = document.getElementsByTagName('nav')[0];
var navBarMobElem = document.getElementsByClassName('navbar')[0];
var navBarDeskElem = document.getElementsByClassName('navbar')[1];
var hamMenuElem = document.getElementById('menu');
var hamIcon = document.getElementById('ham-icon');
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
const navbar_height = '100px';
const navbar_height_onscroll = '60px';
const navbar_desk_height = '110px';
const navbar_desk_height_onscroll = '90px';

// save scrollY position when ham menu opens
// and use it to scroll back the page below when menu closes
// issue: when mobile menu is long and user scrolls the page below also scrolls
var initial_scrollY_pos = 0;

function _close_menu() {
	hamMenuElem.checked = false;
	mobileElem.style.minHeight = '100%';
	if (contentElem) {
		contentElem.style.overflow = 'auto';
		mainElem.style.position = 'static';
		_setnavbar_bgcolour();
	}

	if (hamIcon.classList.contains('ham-open')) {
		hamIcon.classList.remove('ham-open');
	}
}

window.scroll({ behavior: 'smooth' });

window.addEventListener('load', (event) => {
	if (pageType == 'home') {
		navbar_bg_color_trans = 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)';
		navBarDeskElem.style.background = navbar_bg_color_trans;
		navBarMobElem.style.background = navbar_bg_color_trans;
	}
	if (heroType == 'none') {
		navBarDeskElem.style.background = navbar_bg_color_solid;
		navBarMobElem.style.background = navbar_bg_color_solid;
	}

	// make sure mobile menu is closed
	_close_menu();
});

window.addEventListener('unload', (event) => {
	// make sure mobile menu is closed
	_close_menu();
});

function _setnavbar_bgcolour() {
	let fromTop = window.scrollY;

	if (fromTop > 0) {
		logoImgMob.style.height = '30px';
		logoImgDesk.style.height = '60px';
		navBarMobElem.style.height = navbar_height_onscroll;
		navBarDeskElem.style.height = navbar_desk_height_onscroll;
		navBarDeskElem.style.background = navbar_bg_color_solid;
		if (contentElem) {
			navBarMobElem.style.background = navbar_bg_color_solid;
		}
		if (heroType == 'none') {
			navBarDeskElem.style.background = navbar_bg_color_solid;
		}
	}

	if (fromTop < 1) {
		if (!hamMenuElem.checked) {
			logoImgMob.style.height = '60px';
			// logoImgDesk.style.height = "85px";
			logoImgDesk.style.height = '92px';
			navBarMobElem.style.height = navbar_height;
			navBarDeskElem.style.height = navbar_desk_height;
			navBarDeskElem.style.background = navbar_bg_color_trans;
			if (heroType == 'none') {
				navBarDeskElem.style.background = navbar_bg_color_solid;
			}
			if (contentElem) {
				navBarMobElem.style.background = navbar_bg_color_trans;
			}
		}
	}
}

window.addEventListener('scroll', () => {
	_setnavbar_bgcolour();
});

hamMenuElem.addEventListener('click', () => {
	if (hamMenuElem.checked) {
		initial_scrollY_pos = window.scrollY;
		window.scrollTo(0, 0);
		console.log('open menu scrollY = ' + initial_scrollY_pos);
		mobileElem.style.minHeight = '100vh';
		if (contentElem) {
			contentElem.style.overflow = 'hidden';
			mainElem.style.position = 'fixed';
			navBarMobElem.style.background = navbar_bg_color_solid;
		}
		logoImgMob.style.height = '40px';
		logoImgDesk.style.height = '80px';
		navBarMobElem.style.height = navbar_height_onscroll;
		hamIcon.classList.add('ham-open');
		// hamIcon.classList.toggle("ham-open");
	} else {
		mobileElem.style.minHeight = '100%';
		if (contentElem) {
			contentElem.style.overflow = 'auto';
			mainElem.style.position = 'static';
			_setnavbar_bgcolour();
		}
		// hamIcon.classList.toggle("ham-open");
		if (hamIcon.classList.contains('ham-open')) {
			hamIcon.classList.remove('ham-open');
		}
		window.scrollTo(0, initial_scrollY_pos);
	}
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
