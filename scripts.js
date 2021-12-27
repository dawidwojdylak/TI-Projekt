function draw() {
	const canvas = document.getElementById("graphCanvas");
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	canvas.height = canvas.width;
	ctx.transform(1, 0, 0, -1, 0, canvas.height)
	
	let xMax = canvas.height;
	let yMax = canvas.width;
	let slope = 1.2;
	let intercept = 70;
	
	// const xArray = [50,60,70,80,90,100,110,120,130,140,150];
	// const yArray = [7,8,8,9,9,9,10,11,14,14,15];
	let xArray = [];
	let yArray = [];
	// canvas rectangle
	let rect = canvas.getBoundingClientRect();
	console.log(rect);
	for (let i = 0; i < 1000; i++)
	{
		xArray.push(random(0, rect.width));
		yArray.push(random(0, rect.height));
	}

// Plot Scatter
	ctx.fillStyle = "red";
	for (let i = 0; i < xArray.length-1; i++) {
		let x = xArray[i]*xMax/150;
		let y = yArray[i]*yMax/15;
		ctx.beginPath();
		ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
		ctx.fill();
	}

// // Plot Line
// 	ctx.moveTo(0, intercept);
// 	ctx.lineTo(xMax, f(xMax));
// 	ctx.strokeStyle = "black";
// 	ctx.stroke();
//
// // Line Function<br>
// 	function f(x) {
// 		return x * slope + intercept;
// 	}
}

function random(min, max)
{
	return Math.random() * (max - min) + min;
}

// wait for the HTML to load
// document.addEventListener('DOMContentLoaded', init)

