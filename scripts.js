function draw() {
	
	if (typeof(Worker) == "undefined")
	{
		alert("Unfortunately this browser does not support Web Workers");
		return;
	}
	
	let it_num = document.getElementById("it_spin_box").value;
	if (it_num > 1000000 || it_num < 0)
	{
		alert("Please enter a number in range from 0 to 1'000'000");
		return;
	}
	
	const canvas = document.getElementById("graphCanvas");
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	// canvas.height = canvas.width;
	canvas.height = 400;
	canvas.width = 400;
	ctx.transform(1, 0, 0, -1, 0, canvas.height);
	
	let sierpinskiWorker = new Worker('sierpinski.js');
	sierpinskiWorker.postMessage([canvas, it_num]);
	sierpinskiWorker.onmessage = function (msg)
	{
		console.log("onmessage");
		let xArray = msg[0];
		let yArray = msg[1];
		
		// Plot Scatter
		ctx.fillStyle = document.getElementById("color_input").value;
		for (let i = 0; i < xArray.length-1; i++) {
			let x = xArray[i];
			let y = yArray[i];
			ctx.beginPath();
			ctx.ellipse(x, y, .1, .1, 0, 0, Math.PI * 2);
			ctx.fill();
	}
	
	// let temp = sierpinski([canvas, it_num]);
	// let xArray = temp[0];
	// let yArray = temp[1];
	
	}
}

// function sierpinski(canv, it_num)
// {

// }

function random(min, max)
{
	return Math.random() * (max - min) + min;
}

function test1()
{
	const canvas = document.getElementById("graphCanvas");
	const ctx = canvas.getContext("2d");
	ctx.rect(100, 100, 20, 30);
	ctx.fill();
}




