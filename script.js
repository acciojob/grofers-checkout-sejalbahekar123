const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

  // 1️⃣ Select all price elements using class name
  const prices = document.querySelectorAll(".price");

  // 2️⃣ Create a variable to store total
  let total = 0;

  // 3️⃣ Loop through each price
  prices.forEach((price) => {
    
    // Convert text to number and add to total
    total += Number(price.textContent);
  });

  // 4️⃣ Create a new table row
  const newRow = document.createElement("tr");

  // 5️⃣ Create a new table cell
  const newCell = document.createElement("td");

  // 6️⃣ Make the cell take 2 columns (because table has 2 columns)
  newCell.setAttribute("colspan", "2");

  // 7️⃣ Insert total price inside cell
  newCell.textContent = "Total Price: Rs " + total;

  // 8️⃣ Append cell inside row
  newRow.appendChild(newCell);

  // 9️⃣ Select the table
  const table = document.querySelector("table");

  // 🔟 Append new row at the end of table
  table.appendChild(newRow);
};

// Add click event to button
getSumBtn.addEventListener("click", getSum);





