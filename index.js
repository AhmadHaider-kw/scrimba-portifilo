let navtoggle = document.querySelector('.nav-toggle');

let navLinks = document.querySelectorAll('.nav__link');

navtoggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});
