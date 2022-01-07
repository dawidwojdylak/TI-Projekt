onmessage = function(evt)
{
	let w = evt.data[0];
	let h = evt.data[1];
	let it_num = evt.data[2];
	// console.log(h);
	// console.log(w);
	let temp = pentagon(w, h, it_num);
	
	postMessage([temp[0], temp[1]]);
}

function pentagon(width, height, it_num)
{
	let xArray = []
	let yArray = []
	
	let apices = [[.5*width, height], [.626*height, 1], [0, .825*width], [0, .175*width], [.626*height, 0]];
	let currentPoint = apices[0];
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