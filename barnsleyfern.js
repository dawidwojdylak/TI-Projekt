onmessage = function(evt)
{
	let w = evt.data[0];
	let h = evt.data[1];
	let it_num = evt.data[2];
	let temp = barnsleyFern(w, h, it_num);
	// console.log(evt.data[0]);
	postMessage([temp[0], temp[1]]);
}


function barnsleyFern(width, height, it_num)
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
	for (let i = 0 ; i < it_num; ++i)
	{
		xArray.push(x * width * .16 + width / 2);
		yArray.push(y * height * .1);
		let temp = getRandomPoint(x, y);
		x = temp[0];
		y = temp[1];
	}
	
	
	return [xArray, yArray];
}

function random(min, max)
{
	return Math.random() * (max - min) + min;
}
