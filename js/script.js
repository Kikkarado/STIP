var frames = window.parent.frames;

const selectElement = document.querySelector('.lr-list');

if (selectElement) {
	selectElement.addEventListener('change', (event) => {
		var index = event.target.value;
		switch (parseInt(index)) {
			case 2:
				frames[2].location = "/frame/LR2.html";
				console.log(index);
				break;

			case 3:
				frames[2].location = "/frame/LR3.html";
				console.log(index);
				break;

			case 4:

				break;

			case 5:

				break;

			case 6:

				break;

			default:
				break;
		}
	});
}
