const ropeLengths = document.getElementById("rope-lengths");
function calculateMinCost() {
   const ropes = ropeLengths.value.split(',').map(Number);
	
	const priorityQueue = [];
	ropes.forEach(length => priorityQueue.push(length));
	
	let totalCost = 0;
	while(priorityQueue.length > 1){
		const smallest1 = priorityQueue.shift();
		const smallest2 = priorityQueue.shift();
		const cost = smallest1 + smallest2;
		totalCost += cost;
		priorityQueue.push(cost);
		priorityQueue.sort((a, b) => a - b);
	}
	document.getElementById("result").innerHTML = totalCost;
} 
