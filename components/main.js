var isMonthly=true;
let button=document.getElementsByClassName("pricing6-button10 thq-button-filled");
let button2=document.getElementsByClassName("pricing6-button11 thq-button-outline")
let button3=document.getElementsByClassName("pricing6-button12 thq-button-outline");
let button4=document.getElementsByClassName("pricing6-button13 thq-button-filled");
let container=document.getElementsByClassName("pricing6-container1");
let container2=document.getElementsByClassName("pricing6-container2");
button2.addEventListener('click',function(){
    button2.style.display="flex";
    button4.style.display="flex";
    container2.style.display="flex";
    button.style.display="none";
    button3.style.display="none";
    container.style.display="none";
})
button3.addEventListener('click',function(){
    button2.style.display="none";
    button4.style.display="none";
    container2.style.display="none";
    button.style.display="flex";
    button3.style.display="flex";
    container.style.display="flex";
})