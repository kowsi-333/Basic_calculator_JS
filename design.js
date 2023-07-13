var a=parseInt(prompt("enter a first number"));
var b=parseInt(prompt("enter a second number"));
var op=prompt("enter the operator");
switch(op){
    case'+':document.getElementById("result").textContent=(a+b);break;
    case'-':document.getElementById("result").textContent=(a-b);break;
    case'*':document.getElementById("result").textContent=(a*b);break;
    case'/':document.getElementById("result").textContent=(a/b);break;
    case'%':document.getElementById("result").textContent=(a%b);break;
    default:document.getElementById("result").textContent=("Enter a correct operator");break;
}