



const operate = function(operator){
    let result = document.getElementById("result")
    x = parseInt(document.getElementById("x").value);
    y = parseInt(document.getElementById("y").value);
    switch (operator){
        case "+":
            result.innerText = x + y;
            break;
        case "-":
            result.innerText = x - y;
            break;
        case "/":
            result.innerText = x / y;
            break;
        case "*":
            result.innerText = x * y;   
            break;          
    }
}

const add = document.querySelector("#add")
add.onclick = function(varx){
    operate("+")
    
    
}

const sub = document.querySelector("#sub")
sub.onclick = function(varx){
    operate("-")
    
    
}

const div = document.querySelector("#div")
div.onclick = function(varx){
    operate("/")
    
    
}

const mul = document.querySelector("#mul")
mul.onclick = function(varx){
    operate("*")
    
    
}