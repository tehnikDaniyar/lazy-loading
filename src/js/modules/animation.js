export const animation = () => {
	let img = document.querySelector(".gallery__item img");
	console.log(img);

	img.addEventListener('load', () => {
		console.log("loaded");
	})
}
