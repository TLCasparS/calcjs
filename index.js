


const digits = Array.from(document.querySelectorAll(".number"))
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")


let op;


// put button digit input on first input field
const putfDigit = function(){
    digits.forEach(btn => {

        btn.onclick = function(){
            //num1.textContent += btn.innerHTML
            num1.value = num1.value + btn.innerHTML
            console.log(num1.value)
        }
        
    });
}

// put button digit input on second input field
const putsDigit = function(){
    digits.forEach(btn => {

        btn.onclick = function(){
            num2.value = num2.value + btn.innerHTML
            console.log(num2.value)
        }
        
    });
}




putfDigit()


// calcutes result with set operator
// output on result field
const operate = function(operator){
    
    x = parseInt(document.getElementById("num1").value);
    y = parseInt(document.getElementById("num2").value);
    let result
    console.log(x,y)
    switch (operator){
        case "+":
            result = x+y
            document.getElementById("resi").value = result
            break;
        case "-":
            result = x-y
            document.getElementById("resi").value = result
            break;
        case "/":
            result = x/y
            document.getElementById("resi").value = result
            break;
        case "*":
            result = x*y
            document.getElementById("resi").value = result
            break;          
    }
}

const add = document.querySelector("#add")

//onclik function set the operator and switch to the second number for input
add.onclick = function(){
    op = "+"
    putsDigit();
    
    
    
}

const sub = document.querySelector("#sub")
sub.onclick = function(){
    op = "-"
    putsDigit();
    
    
    
}

const div = document.querySelector("#div")
div.onclick = function(){
    op = "/"
    putsDigit();
    
    
    
}

const mul = document.querySelector("#mul")
mul.onclick = function(){
    op = "*"
    putsDigit();
    
}


//equals opertor calculates the result, gets numers from the now filled fields
const eq = document.querySelector("#equ")
    let res = document.getElementById("result") 

    eq.onclick = function(result){
        x = parseInt(document.getElementById("num1").value);
        y = parseInt(document.getElementById("num2").value);

        operate(op)
        
        
    }
