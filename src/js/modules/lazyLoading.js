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
				lazyImagesPosition.push(img.getBoundingClientRect().top)
			};
		})
	};

	console.log(lazyImagesPosition);


}