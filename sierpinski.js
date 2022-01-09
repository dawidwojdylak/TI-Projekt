onmessage = function(evt)
{
	let w = evt.data[0];
	let h = evt.data[1];
	let it_num = evt.data[2];
	// console.log(h);
	// console.log(w);
	let temp = sierpinski(w, h, it_num);

	postMessage([temp[0], temp[1]]);
}

function sierpinski(width, height, it_num)
{
	let xArray = []
	let yArray = []
	
	let apices = [[0, 0], [width, 0], [width/2, height]];
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
