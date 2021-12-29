onmessage = function(msg)
{
	const canv = msg[0];
	const it_num = msg[1];
	
	let xArray = [];
	let yArray = [];
	let rect = canv.getBoundingClientRect();
	let apices = [[0, 0], [rect.width, 0], [rect.width/2, rect.height]];
	let currentPoint = [0, 0];
	let currentApex;
	
	for (let i = 0; i < it_num; i++) {
		xArray.push(currentPoint[0]);
		yArray.push(currentPoint[1]);
		currentApex = apices[Math.floor(Math.random() * apices.length)]
		currentPoint[0] = (currentPoint[0] + currentApex[0]) / 2;
		currentPoint[1] = (currentPoint[1] + currentApex[1]) / 2;
	}
	
	return [xArray, yArray];
}