function drawTriangle(size) {

   // Your solution goes here

   for(let x = size-1; x >= 0; x--) {
         // do something
         let output = ""
         for(let y = 0; y < size-x; y++) {
            // do something
            output = output + "*";
         }
         console.log(output);
   }
  
   
}