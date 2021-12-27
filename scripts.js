function draw() {
	
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

	
	let xArray = [];
	let yArray = [];
	let rect = canvas.getBoundingClientRect();
	let apices = [[0, 0], [rect.width, 0], [rect.width/2, rect.height]];
	let currentPoint = [0, 0];
	let currentApex;
	
	for (let i = 0; i < it_num; i++)
	{
		xArray.push(currentPoint[0]);
		yArray.push(currentPoint[1]);
		currentApex = apices[Math.floor(Math.random() * apices.length)]
		currentPoint[0] = (currentPoint[0] + currentApex[0]) / 2;
		currentPoint[1] = (currentPoint[1] + currentApex[1]) / 2;
	}
	
	

// Plot Scatter
	ctx.fillStyle = document.getElementById("color_input").value;
	for (let i = 0; i < xArray.length-1; i++) {
		let x = xArray[i];
		let y = yArray[i];
		ctx.beginPath();
		ctx.ellipse(x, y, .1, .1, 0, 0, Math.PI * 2);
		ctx.fill();
	}
}

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




