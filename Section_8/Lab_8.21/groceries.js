let groceryList = [];

// Wait until DOM is loaded
window.addEventListener("DOMContentLoaded", function() {
   document.querySelector("#addBtn").addEventListener("click", addBtnClick);
   document.querySelector("#clearBtn").addEventListener("click", clearBtnClick);

   // Load the grocery list from localStorage
   groceryList = loadList();
  
   if (groceryList.length > 0) {
      // Display list
      for (let item of groceryList) {
         showItem(item);
      } 
   }
   else {
      // No list to display
      enableClearButton(false);
   }     
});

// Enable or disable the Clear button
function enableClearButton(enabled) {
   document.querySelector("#clearBtn").disabled = !enabled;
}

// Show item at end of the ordered list
function showItem(item) {
   let list = document.querySelector("ol");
   list.innerHTML += `<li>${item}</li>`;     
}

// Add item to grocery list
function addBtnClick() {
   let itemTextInput = document.querySelector("#item");
   let item = itemTextInput.value.trim();
   if (item.length > 0) {
      enableClearButton(true);
      showItem(item);
      groceryList.push(item);

      // Save groceryList to localStorage
      saveList(groceryList);
   }

   // Clear input
   itemTextInput.value = '';
}

// Clear the list
function clearBtnClick() {
   enableClearButton(false);
   groceryList = [];
   let list = document.querySelector("ol");
   list.innerHTML = "";

   // Remove the grocery list from localStorage
   clearList();
}

// Complete the functions below

function loadList() {
   //split the lost from local stoage delimite dby a comma and store into list
   if(localStorage.getItem("list") == null) {
      return [];
   }
   let list = localStorage.getItem("list").split(",");
   return list;
   
}

function saveList(groceryList) {
   //join the list by a comma and store into a string
   let list = groceryList.join(",");
   //set the string to local storage
   localStorage.setItem("list", list);
  
}

function clearList() {
   //remove the grocery list from local storage
   localStorage.removeItem("list");
   
}