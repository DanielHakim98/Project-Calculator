
function operate(num1, num2, operator) {
    let action;
    if(operator=="+") action="add";
    if(operator=="-") action="minus";
    if(operator=="×") action="multi";
    if(operator=="/") action="divide";
  const actions = {
    add: (num1, num2) => parseFloat(num1) + parseFloat(num2),
    minus: (num1, num2) => num1 - num2,
    multi: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1/ num2,
  };

  return actions[action]?.(num1, num2) ?? "Error";;
}

const makeIntoANumber = function(arr){
    const show=arr.reduce((total,item)=>{
    return total + item;
   });
   return show;
};


const connectAllString =function(str1,operator,str2){
    screen.textContent=str1+" "+operator+" "+str2;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


let arrNum1=[];
let arrNum2=[];
let strNum1="";
let operator="";
let strNum2="";
let total="";

const screen = document.querySelector('.screen');
const regex=/^[0-9\.]/;
console.log(screen)

const btnsNumber=document.querySelectorAll('[data-number]');
btnsNumber.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(operator===""){                                          // To make sure the input is for first operand.
            if(arrNum1.length!==0 && total.length!==0){             // Replace 'total' of the calculation when new number is clicked.
                total="";
                arrNum1.length=0;
                arrNum1.push(e.target.textContent);
                strNum1=makeIntoANumber(arrNum1);
                connectAllString(strNum1,operator,strNum2);
            }
            else{
                arrNum1.push(e.target.textContent);
                strNum1=makeIntoANumber(arrNum1);
                connectAllString(strNum1,operator,strNum2);         
            }
        }

        else{ 
            arrNum2.push(e.target.textContent);                    // If the 'operator === true' , the clicked numbers will be as second operand.
            strNum2=makeIntoANumber(arrNum2);
            connectAllString(strNum1,operator,strNum2);
        }
        console.log(arrNum1);
        console.log(arrNum2);
    });
});


const btnsOperator=document.querySelectorAll('[data-operator]');
btnsOperator.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(arrNum1.length==0 && e.target.textContent=='-'){     // To allow negative operand to be inserted.
            if(total){                                          // Check whether '-' is to input as negative number or as operator.
                arrNum1.push(total);
                operator=e.target.textContent;
                // strNum1=makeIntoANumber(arrNum1);
                // connectAllString(strNum1,operator,strNum2); 
            }
            else{
                arrNum1.push(e.target.textContent);
                // strNum1=makeIntoANumber(arrNum1);
                // connectAllString(strNum1,operator,strNum2); 
            }
            strNum1=makeIntoANumber(arrNum1);
            connectAllString(strNum1,operator,strNum2); 
        }
        
        else if(operator!=="" && e.target.textContent==="-"){   // Allow second operand to be negative number.
            arrNum2.push(e.target.textContent);
            strNum2=makeIntoANumber(arrNum2);
            connectAllString(strNum1,operator,strNum2);
        }

        else if(total){                                         // Check for any previous calculation of 'total'.

            if(arrNum1.length!==0 || total==NaN) total="";      // To start new calculation if new 'numbers' button is clicked.
            else arrNum1.push(total);                           // Store 'Total' as first operand if no new number is clicked after previous calculation.

            operator=e.target.textContent;
            strNum1=makeIntoANumber(arrNum1);
            connectAllString(strNum1,operator,strNum2);
        }

        else{
            operator=e.target.textContent;
            connectAllString(strNum1,operator,strNum2);
        }
        console.log(operator);
    });
});

const btnEqual=document.getElementById('equal');
btnEqual.addEventListener('click',(e)=>{
    total=round(operate(strNum1,strNum2,operator),2);
    total=total.toString();

    arrNum1.length=0;
    arrNum2.length=0;
    strNum2="";
    operator="";
    screen.textContent=total;

    if(total=="NaN") total="";
    
    arrNum1.push(total);
    strNum1=makeIntoANumber(arrNum1);
  
    arrNum1.length=0;
    strNum1="";
  
});

const btnPoint = document.getElementById('point');
btnPoint.addEventListener('click',(e)=>{
    
});


const btnClear = document.getElementById('clear');
btnClear.addEventListener('click',(e)=>{
  arrNum1.length=0;
  arrNum2.length=0;
  operator="";
  strNum1="";
  strNum2="";
  total="";
  screen.textContent=0;

});

const btnDelete = document.getElementById('delete');
btnDelete.addEventListener('click',(e)=>{
    
});



