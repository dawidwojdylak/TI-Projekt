function draw() {
	let xArray = [];
	let yArray = [];
	
	const sierpinskiWorker = new Worker('./sierpinski.js');
	const barnsleyfernWorker = new Worker('./barnsleyfern.js');
	const pentagonWorker = new Worker('./pentagon.js');
	
	let it_num = document.getElementById("it_spin_box").value;
	if (it_num > 1000000 || it_num < 0)
	{
		alert("Please enter a number in range from 0 to 1'000'000");
		return;
	}
	
	let plot_size = document.getElementById("plotSize").value;
	// console.log(plot_size);
	const canvas = document.getElementById("graphCanvas");
	const ctx = canvas.getContext("2d");
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#FF0000";
	// canvas.height = canvas.width;
	canvas.height = plot_size;
	canvas.width = plot_size;
	ctx.transform(1, 0, 0, -1, 0, canvas.height);
	ctx.fillStyle = document.getElementById("color_input").value;

	let rect = canvas.getBoundingClientRect();
	let temp;
	
	if (document.getElementById("sel_frac").value === "sierpinski")
		sierpinskiWorker.postMessage([600, 600, it_num]);
		// temp = sierpinski(rect, it_num);
	else if (document.getElementById("sel_frac").value === "barnsleyFern")
		barnsleyfernWorker.postMessage([plot_size, plot_size, it_num]);
		// temp = barnsleyFern(rect, it_num);
	else if (document.getElementById("sel_frac").value === "pentagon")
		pentagonWorker.postMessage([600, 600, it_num]);
		
	sierpinskiWorker.onmessage = function (evt)
	{
		plot(evt.data[0], evt.data[1]);
	}
	
	barnsleyfernWorker.onmessage = function (evt)
	{
		plot(evt.data[0], evt.data[1]);
	}
	
	pentagonWorker.onmessage = function (evt)
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

function resizeCanvas(val)
{
	console.log(val);
	// let canvas = document.getElementById("graphCanvas");
	// canvas.height = val;
	// canvas.width = val;
}

function about_disp()
{
	document.getElementById('info').style.display='block';
	document.getElementById('sub_info').style.display='block';
}

function about_hide()
{
	document.getElementById('info').style.display='none';
	document.getElementById('sub_info').style.display='none';
	document.getElementById('doc').style.display='none';
}

function doc_disp()
{
	document.getElementById('doc').style.display='block';
	document.getElementById('sub_info').style.display='block';
}





