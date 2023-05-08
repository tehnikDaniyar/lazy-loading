export const lazyLoading = () => {

	// if ('loading' in HTMLImageElement.prototype) {
	// 	// supported in browser
	// } else {

	// };

	const lazyImages = document.querySelectorAll('img[data-src]');
	const loadMapBlock = document.querySelectorAll('._load-map');
	const windowHeight = document.documentElement.clientHeight;

	console.log(lazyImages);

	let lazyImagesPosition = [];

	if (lazyImages.length > 0) {
		lazyImages.forEach(img => {
			console.log(img);
			if (img.dataset.src) {
				lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
				lazyScrollCheck(lazyImages, lazyImagesPosition);
			};
		})
	};



	// function lazyScrollCheck() {
	// 	let imgIndex = lazyImagesPosition.findIndex(item => pageYOffset > item - windowHeight);
	// 	if (imgIndex >= 0) {
	// 		if (lazyImages[imgIndex].dataset.src) {
	// 			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
	// 			lazyImages[imgIndex].removeAttribute('data-src');
	// 		};
	// 		delete lazyImagesPosition[imgIndex];
	// 	};
	// };

	function lazyScrollCheck(nodelist, arrOfPositions) {
		let imgIndex = arrOfPositions.findIndex(item => pageYOffset > item - windowHeight);
		if (imgIndex >= 0) {
			if (nodelist[imgIndex].dataset.src || nodelist[imgIndex].dataset.map) {

				if (nodelist[imgIndex].src) {
					nodelist[imgIndex].src = nodelist[imgIndex].dataset.src;
					nodelist[imgIndex].removeAttribute('data-src');
				} else if (nodelist[imgIndex].map) {

				};
			};
			delete arrOfPositions[imgIndex];
		};
	};

	console.log(loadMapBlock);
	let lazyMapPositions = [];

	if (loadMapBlock.length > 0) {
		loadMapBlock.forEach(mapBlock => {
			if (mapBlock.dataset.map) {
				lazyMapPositions.push(mapBlock.getBoundingClientRect().top + pageYOffset);
			};
		});
	};


	window.addEventListener('scroll', () => {
		lazyScrollCheck(lazyImages, lazyImagesPosition);
		lazyScrollCheck(loadMapBlock, lazyMapPositions);
	});



}