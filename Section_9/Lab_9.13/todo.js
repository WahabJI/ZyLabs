// HTML for the up, down, and done buttons
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
   $("#addBtn").click(addBtnClick);
   
   // TODO: Add item if user presses Enter
   $("#newItemText").keypress(function(event) {
      if (event.which === 13) {
         addBtnClick();
      }
   });

});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   // Don't add empty strings
   if (itemText.length !== 0) {
      addItem(itemText);

      // Clear text and put focus back in text input
      $("#newItemText").val("").focus();
   } 
}

function addItem(item) {      
   // Create a new <li> for the list
   let $newItem = $(`<li><span>${item}</span></li>`);
   
   // Up button moves item up one spot
   let $upButton = $(upButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index - 1); 
   });
   
   // Down button moves item down one spot
   let $downButton = $(downButtonHtml).click(function() {
      let index = $(this.parentElement).index();
      moveItem(index, index + 1); 
   });
      
   // Add click hander for done button
   $doneButton = $(doneButtonHtml).click(function() {
      // Remove item from list
      let index = $(this.parentElement).index();
      removeItem(index);
   });

   // Add all buttons to the new item, and add new item to list
   $newItem.append($upButton, $downButton, $doneButton);
   $("ol").append($newItem);   
}

function moveItem(fromIndex, toIndex) {
   // TODO: Complete the function

   // get current element
   const curr = $("ol li").eq(fromIndex);

   // if fromindex is higher then we have to current element before next element
   if(fromIndex > toIndex)
   {
       // to avoid moving up the first element
       if(toIndex !== -1)
       {
           $(curr).insertBefore($("ol li").eq(toIndex));
       }
   }
   // if toindex is higher then we have to current element after next element
   else
   {
       // to avoid moving down the last element
       if(fromIndex !== $("ol li").length - 1)
       {
           $(curr).insertAfter($("ol li").eq(toIndex));
       }
   }
   
}

function removeItem(index) {
   // TODO: Complete the function
   $("ol").children().eq(index).remove();
   
}