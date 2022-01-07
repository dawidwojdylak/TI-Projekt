function draw() {
	let xArray = [];
	let yArray = [];
	
	const sierpinskiWorker = new Worker('./sierpinski.js');
	const barnsleyfernWorker = new Worker('./barnsleyfern.js');
	
	let it_num = document.getElementById("it_spin_box").value;
	if (it_num > 1000000 || it_num < 0)
	{
		alert("Please enter a number in range from 0 to 1'000'000");
		return;
	}
	const canvas = document.getElementById("graphCanvas");
	const ctx = canvas.getContext("2d");
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#FF0000";
	// canvas.height = canvas.width;
	canvas.height = 600;
	canvas.width = 600;
	ctx.transform(1, 0, 0, -1, 0, canvas.height);
	ctx.fillStyle = document.getElementById("color_input").value;

	let rect = canvas.getBoundingClientRect();
	let temp;
	
	if (document.getElementById("sel_frac").value === "sierpinski")
		sierpinskiWorker.postMessage([600, 600, it_num]);
		// temp = sierpinski(rect, it_num);
	else if (document.getElementById("sel_frac").value === "barnsleyFern")
		barnsleyfernWorker.postMessage([600, 600, it_num]);
		// temp = barnsleyFern(rect, it_num);
	
	sierpinskiWorker.onmessage = function (evt)
	{
		plot(evt.data[0], evt.data[1]);
	}
	
	barnsleyfernWorker.onmessage = function (evt)
	{
		plot(evt.data[0], evt.data[1]);
	}
	
	function plot(xArray, yArray)
	{
		for (let i = 0; i < xArray.length-1; i++) {
			let x = xArray[i];
			let y = yArray[i];
			ctx.beginPath();
			ctx.ellipse(x, y, .1, .1, 0, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	
	// xArray = temp[0];
	// yArray = temp[1];
	
// Plot Scatter

}








