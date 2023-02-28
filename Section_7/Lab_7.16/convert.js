window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   document.getElementById("convertButton").addEventListener("click", function() {
     let cInput = document.getElementById("cInput").value;
     let fInput = document.getElementById("fInput").value;
     var temp = 0;
     if(isNaN(cInput)){
         document.getElementById("errorMessage").innerHTML = cInput +" is not a number";
       } else if(isNaN(fInput)){
         document.getElementById("errorMessage").innerHTML = fInput +" is not a number";
       }else{
         document.getElementById("errorMessage").innerHTML = "";
         }

     if (cInput !== "") {
      temp = convertCtoF(cInput);
      document.getElementById("fInput").value = temp;
     } else if (fInput !== "") {
       document.getElementById("cInput").value = convertFtoC(fInput);
       temp = fInput;
     }


     if(parseInt(temp) < 32){
       document.getElementById("weatherImage").src = "cold.png";
     } else if(parseInt(temp) >= 32 && parseInt(temp) <= 50){
         document.getElementById("weatherImage").src = "cool.png";
      } else{
         document.getElementById("weatherImage").src = "warm.png";
      }
   });
 
   // Add input event listeners to the text fields
   document.getElementById("cInput").addEventListener("input", function() {
     let cInput = document.getElementById("cInput");
     let fInput = document.getElementById("fInput");
     if (cInput.value !== "") {
       fInput.value = "";
     }
   });
 
   document.getElementById("fInput").addEventListener("input", function() {
     let cInput = document.getElementById("cInput");
     let fInput = document.getElementById("fInput");
     if (fInput.value !== "") {
       cInput.value = "";
     }
   });
 }
 

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   return (degreesFahrenheit - 32) * 5 / 9;
}
