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
   });
   return show;
};

const connect =function(str1,operator,str2){
    screen.textContent=str1+" "+operator+" "+str2;
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


class Object {
    constructor(num1,operator,num2) {
        this.num1 = num1;
        this.operator = operator;
        this.num2 = num2;
    }
};
let arrNum1=[];
let arrNum2=[];
let strNum1="";
let operator="";
let strNum2="";
let total;

const screen = document.querySelector('.screen');
const regex=/^[0-9\.]/;
console.log(screen)

const btnsNumber=document.querySelectorAll('[data-number]');
btnsNumber.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(operator===""){
            if(arrNum1.length!==0 && total==true){
                total="";
                arrNum1.length=0;
                arrNum1.push(e.target.textContent);
                strNum1=display(arrNum1);
                connect(strNum1,operator,strNum2);
            }
            else{
                arrNum1.push(e.target.textContent);
                strNum1=display(arrNum1);
                connect(strNum1,operator,strNum2);
            }
        }

        else{ 
            arrNum2.push(e.target.textContent);
            strNum2=display(arrNum2);
            connect(strNum1,operator,strNum2);
        }
        console.log(arrNum1);
        console.log(arrNum2);
    });
});


const btnsOperator=document.querySelectorAll('[data-operator]');
btnsOperator.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(arrNum1.length==0 && e.target.textContent=='-'){
            arrNum1.push(e.target.textContent);
            strNum1=display(arrNum1);
            connect(strNum1,operator,strNum2);
        }
        
        else if(operator!=="" && e.target.textContent==="-"){
            arrNum2.push(e.target.textContent);
            strNum2=display(arrNum2);
            connect(strNum1,operator,strNum2);
        }

        else if(total){
            arrNum1.push(total);
            operator=e.target.textContent;
            strNum1=display(arrNum1);
            connect(strNum1,operator,strNum2);
        }

        else{
            operator=e.target.textContent;
            //arrNum1.push(e.target.textContent);
            connect(strNum1,operator,strNum2);
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
    arrNum1.push(total);
    strNum1=display(arrNum1);
    screen.textContent=total;
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



