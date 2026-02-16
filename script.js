const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {
//Add your code here
  let total = 0;
  let prices = document.querySelectorAll(".prices");
	for(let i=0; i<prices.length; i++){
		total += Number(prices[i].textContent);	
	}
	let newRow = document.createElement("tr");
	let newCell = document.createElement("td");
	newCell.colSpan = 2;
	 newCell.id = "ans";   
     newCell.textContent = total;

	newRow.appendChild(newCell);
	document.querySelector("table").appendChild(newRow);
	
};

getSumBtn.addEventListener("click", getSum);





