export const lazyLoading = () => {

	// if ('loading' in HTMLImageElement.prototype) {
	// 	// supported in browser
	// } else {

	// };

	const lazyImages = document.querySelectorAll('img[data-src]');
	const loadMapBlock = document.querySelector('._loadmap');
	const windowHeight = document.documentElement.clientHeight;

	console.log(lazyImages);

	let lazyImagesPosition = [];

	if (lazyImages.length > 0) {
		lazyImages.forEach(img => {
			console.log(img);
			if (img.dataset.src) {
				lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
				lazyScrollCheck();
			};
		})
	};

	window.addEventListener('scroll', () => {
		lazyScrollCheck();
	});

	function lazyScrollCheck() {
		let imgIndex = lazyImagesPosition.findIndex(item => pageYOffset > item - windowHeight);
		if (imgIndex >= 0) {
			if (lazyImages[imgIndex].dataset.src) {
				lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
				lazyImages[imgIndex].removeAttribute('data-src');
			};
			delete lazyImagesPosition[imgIndex];
		};
	};

	console.log(lazyImagesPosition)

}