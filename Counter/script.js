let num = 0;
let savedNumbers = [];
let stat = "Delete Item";

function increase() {
  num++;
  display(num);
}
function reset() {
  num = 0;
  display(num);
}
function decrease() {
  num--;
  display(num);
}
function display(num) {
  document.getElementById("displayNumber").innerHTML = num;
}
display(num);

function savedItems() {
  let repetativeNumber = savedNumbers.filter((item) => {
    return item == num;
  });
  if (repetativeNumber.length == 0) {
    savedNumbers.push(num);
  } else {
    alert("Item could not be saved! Exist in the list already!");
  }
  displaySavedItems(savedNumbers);
}
function displaySavedItems(savedNumbers) {
  let prevList = "";
  for (let i = 0; i < savedNumbers.length; i++) {
    prevList =
      prevList +
      `<div style="display:flex;margin-top:5px;"><li style="margin-right:10px">${savedNumbers[i]}</li>` +
      `<button onclick= deleteIndividual(${i})>${stat}</button></div>`;
  }
  console.log(savedNumbers);
  document.getElementById("savedItemList").innerHTML = prevList;
}
function deleteListItem() {
  savedNumbers.length = 0;
  document.getElementById("savedItemList").innerHTML = savedNumbers;
}
function deleteIndividual(index) {
  savedNumbers.splice(index, 1);
  displaySavedItems(savedNumbers);
}
