'use strict'
// Uses backticks (`)
// To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 

// Example of Template Literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    arr.forEach((item)=>{
      failureItems.push(`<li class="text-warning">${item}</li>`)
    });
    
    // Only change code above this line
  
    return failureItems;
}
  
const failuresList = makeList(result.failure);
console.log(failuresList);