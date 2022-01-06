function draw() {

	let it_num = document.getElementById("it_spin_box").value;
	if (it_num > 1000000 || it_num < 0)
	{
		alert("Please enter a number in range from 0 to 1'000'000");
		return;
	}
	
	const htmlCanvas = document.getElementById("graphCanvas");
	const offscreen = htmlCanvas.transferControlToOffscreen();
	
	const worker = new Worker("offscreencanvas.js");
	worker.postMessage([{canvas: offscreen}], [offscreen]);
	
	
	
}



function random(min, max)
{
	return Math.random() * (max - min) + min;
}




