var i = 1;
function newTransaction() {
  var desc = document.getElementById("desc").value;
  var amt = document.getElementById("amt").value;
  var table = document.getElementById("history");
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = desc;
  cell2.innerHTML = amt;
  i = i + 1;
  document.getElementById("desc").value = "";
  document.getElementById("amt").value = "";
}

function clearTable() {
  document.getElementById("history").deleteRow(i - 1);
  i = i - 1;
}

function changeText() {
  selectElement = document.querySelector("#expType");
  output = selectElement.options[selectElement.selectedIndex].value;
  document.querySelector(".exp").textContent = "Tracking " + output + "";
}
