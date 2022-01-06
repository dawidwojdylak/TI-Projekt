onmessage = function (evt)
{
	// const canvas = document.getElementById("graphCanvas");
	// const ctx = canvas.getContext("2d");
	
	let xArray = [];
	let yArray = [];
	
	const canvas = evt[0].data.canvas;
	const it_num = evt[1];
	const ctx = canvas.getContext("2d")
	
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#FF0000";
	// canvas.height = canvas.width;
	canvas.height = 600;
	canvas.width = 600;
	ctx.transform(1, 0, 0, -1, 0, canvas.height);

	let rect = canvas.getBoundingClientRect();
	let temp;

	if (document.getElementById("sel_frac").value === "sierpinski")
		temp = sierpinski(rect, it_num);
	else if (document.getElementById("sel_frac").value === "barnsleyFern")
		temp = barnsleyFern(rect, it_num);

	xArray = temp[0];
	yArray = temp[1];

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


function sierpinski(rect, it_num)
{
	let xArray = []
	let yArray = []
	
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
	
	return [xArray, yArray];
}

function barnsleyFern(rect, max_it)
{
	function f1(x0, y0) { return [0.85*x0 + 0.04*y0, -0.04*x0 + 0.85*y0 + 1.6] }
	function f2(x0, y0) { return [0.2*x0 - 0.26*y0, 0.23*x0 + 0.22*y0 + 1.6] }
	function f3(x0, y0) { return [-0.15*x0 + 0.28*y0, 0.26*x0 + 0.24*y0 + 0.44] }
	function f4(x0, y0) { return [0, .16*y0] }
	function getRandomPoint(x, y)
	{
		let p = random(0, 100);
		if      (p > 0 && p <= 85 ) return f1(x, y);
		else if (p > 85 && p <= 92) return f2(x, y);
		else if (p > 92 && p <= 99) return f3(x, y);
		else                        return f4(x, y);
	}
	
	let xArray = [];
	let yArray = [];
	let x = 0;
	let y = 0.;
	for (let i = 0 ; i < max_it; ++i)
	{
		xArray.push(x * rect.width * .16 + rect.width / 2);
		yArray.push(y * rect.height * .1);
		let temp = getRandomPoint(x, y);
		x = temp[0];
		y = temp[1];
	}
	
	// resize plot to canvas size
	let max = Math.max(...xArray);
	// xArray = xArray * rect.width / max;
	max = Math.max(...yArray);
	// yArray = yArray * rect.height / max;
	
	// xArray = xArray;
	// yArray = yArray;
	
	return [xArray, yArray];
}