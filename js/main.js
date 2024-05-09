
let inputone = document.getElementById("inputone");
let inputtwo = document.getElementById("inputtwo");
let inputthre = document.getElementById("inputthre");

document.getElementById("qosh").addEventListener("click" , function(){
    inputthre.value = parseFloat(inputone.value) + parseFloat(inputtwo.value);
})
document.getElementById("bol").addEventListener("click" , function(){
    inputthre.value = parseFloat(inputone.value) / parseFloat(inputtwo.value);
})
document.getElementById("kopay").addEventListener("click" , function(){
    inputthre.value = parseFloat(inputone.value) * parseFloat(inputtwo.value);
})
document.getElementById("ayir").addEventListener("click" , function(){
    inputthre.value = parseFloat(inputone.value) - parseFloat(inputtwo.value);
})
document.getElementById("qoldiq").addEventListener("click" , function(){
    inputthre.value = parseFloat(inputone.value) % parseFloat(inputtwo.value);
})
document.getElementById("kvadrat").addEventListener("click" , function(){
    inputthre.value = parseFloat(inputone.value) ** parseFloat(inputtwo.value);
})



