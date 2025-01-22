// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError

{
    var newVarVariable = 0;
    let newLetVariable = 1;
    const newConstVariable = 2;

    console.log(newVarVariable);
    console.log(newLetVariable);
    console.log(newConstVariable);

    newVarVariable = 1;
    newLetVariable = 2;
    newConstVariable = 3;

    console.log(newVarVariable);
    console.log(newLetVariable);
    console.log(newConstVariable);
}

    console.log(newVarVariable);
    console.log(newLetVariable);
    console.log(newConstVariable);

    newVarVariable = 10;
    newLetVariable = 20;
    newConstVariable = 30;

    console.log(newVarVariable);
    console.log(newLetVariable);
    console.log(newConstVariable);
    