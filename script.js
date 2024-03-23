function generateMultiplicationTable() {
    const number = parseInt(document.getElementById("number").value);
    const rows = parseInt(document.getElementById("rows").value);
    const resultContainer = document.getElementById("result-container");
  
    if (isNaN(number) || isNaN(rows)) {
      alert("Please enter valid numbers.");
      return;
    }
  
    let tableHTML = `<h2>Multiplication Table for ${number}</h2><ul>`;
    for (let i = 1; i <= rows; i++) {
      const result = number * i;
      tableHTML += `<li>${number} x ${i} = ${result}</li>`;
    }
    tableHTML += "</ul>";
  
    resultContainer.innerHTML = tableHTML;
    resultContainer.classList.add('show');
    
  }
  