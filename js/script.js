const add = function(num1, num2) {
    return parseFloat(num1)+parseFloat(num2);
};

const subtract = function(num1, num2) {
    return num1-num2;
};

const divide = function(num1, num2){
    return num1/num2;
};
const multiply = function(num1, num2) {
    return num1*num2;
};

const operate = function(num1,num2,operator){
    if(operator=="+") return add(num1,num2);
    else if(operator=="-") return subtract(num1,num2);
    else if(operator=="×") return multiply(num1,num2);
    else return divide(num1,num2);
};

const display = function(arr){
    const show=arr.reduce((total,item)=>{
    return total + item;
   },);
   console.log(show);
   screen.textContent=show;

};

const factory =function(arr){
   const regex=/^[0-9\.]/;
   let num1="";
   let operator="";
   let num2="";

  for(let i=0; i<arr.length; i++){
    if(!regex.test(arr[i])){
        arr.splice(0,i);
        operator=arr.splice(0,1);
        num2=secondloop(arr,regex);
        break;    
    }
    else{
        num1+=arr[i];
    }
  }
  
  let total=round(operate(num1,num2,operator),2);
  console.log(total);
  arr.splice(0,1,total);
  arrTotal=arr.map((x)=>x);
  display(arrTotal);
  console.log(arrTotal);
};

const secondloop=function(arr,regex){
    let num2="";
    for(let i=0; i<arr.length; i++){
        if(!regex.test(arr[i])){
            arr.splice(0,i);
            break;    
        }
        else{
            num2+=arr[i];
        }
    }
    return num2;
}

const isOperator=function(arr){
    for(let i=0; i<arr.length; i++){
        if(!regex.test(arr[i])){
            return false
        }
        else
        continue;
    }
    return true;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

const arr=[];
let arrTotal=[];
let displayString="";
const screen = document.querySelector('.screen');
const regex=/^[0-9\.]/;
console.log(screen)

const btnsNumber=document.querySelectorAll('[data-number]');
btnsNumber.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(arrTotal.length!==0 && isOperator(arr)){
            arrTotal.length=0;
            arr.length=0;
        }
        arr.push(e.target.textContent);
        display(arr);
    });
});


const btnsOperator=document.querySelectorAll('[data-operator]');
btnsOperator.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.textContent==="="){
        arr.push(e.target.textContent);
        display(arr);
        factory(arr);
        }

        else if(!isOperator(arr)){
        factory(arr);
        arr.push(e.target.textContent);
        display(arr);
        }

        else{
        console.log(e.target.textContent);
        arr.push(e.target.textContent);
        display(arr);
        console.log(arr);
        }
    });
});

const btnPoint = document.getElementById('point');
btnPoint.addEventListener('click',(e)=>{
    //console.log(e.target);
    arr.push(e.target.textContent);
    display(arr);
});






const btnClear = document.getElementById('clear');
btnClear.addEventListener('click',(e)=>{
    arr.length=0;
    screen.textContent="0";
    //console.log(e.target);
});

const btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click',(e)=>{
    //console.log(e.target);
});



