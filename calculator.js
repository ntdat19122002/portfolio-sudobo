const myNumber = document.getElementById('myNumber');
const result = document.getElementById('result');
var type,valueResult;


function insertNumber(number){
    myNumber.value += number;
}

function deleteAll(){
    myNumber.value='';
    result.innerHTML=0;
    type ='';
}

function deleteValue(){
    myNumber.value=myNumber.value.slice(0,-1)
}

function add(){
    if(!type){
        equal()
    }
    type = 'add';
}
function subtract(){
    if(!type){
        equal()
    }
    type = 'subtract';
}
function multi(){
    if(!type){
        equal()
    }
    type = 'multi';
}
function divide(){
    if(!type){
        equal()
    }
    type = 'divide';
}

function equal(){
    var a = parseFloat(result.innerHTML);
    var b = parseFloat(myNumber.value);
    switch (type){
        case 'add':
            valueResult = a + b;
            break;
        case 'subtract':
            valueResult = a - b;
            break;
        case 'multi':
            valueResult = a * b;
            break;
        case 'divide':
            valueResult = a / b;
            break;
        default:
            valueResult = b;
    }
    result.innerHTML = valueResult;
    myNumber.value = null;
}