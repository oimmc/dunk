export const requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60)
	}

export const cancelAnimationFrame =
	window.cancelAnimationFrame ||
	window.webkitCancelAnimationFrame ||
	function (id) {
		window.clearTimeout(id)
	}