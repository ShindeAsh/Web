
var resultText = document.getElementById("result");
resultText.textContent='0';
var lastadded;

document.getElementById('bac').addEventListener('click', function(){
    resultText.textContent = '0';
    lastadded = 'num';
})
document.getElementById('bdel').addEventListener('click', function(){
    if(resultText.textContent.length > 1){
        resultText.textContent = resultText.textContent.slice(0,-1);
    lastadded = 'modifier';
    if(resultText.textContent==' '){
        resultText.textContent='0';
    }
    }
    else{
        resultText.textContent = '0';
    }
})
document.getElementById('b1').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '1';
    }
    else{
        resultText.textContent += '1';
    }
    lastadded = 'num';
})
document.getElementById('b2').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '2';
    }
    else{
        resultText.textContent += '2';
    }
    lastadded = 'num';
})
document.getElementById('b3').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '3';
    }
    else{
        resultText.textContent += '3';
    }lastadded = 'num';
})
document.getElementById('b4').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '4';
    }
    else{
        resultText.textContent += '4';
    }
    lastadded = 'num';
})
document.getElementById('b5').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '5';
    }
    else{
        resultText.textContent += '5';
    }
    lastadded = 'num';
})
document.getElementById('b6').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '6';
    }
    else{
        resultText.textContent += '6';
    }
    lastadded = 'num';
})
document.getElementById('b7').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '7';
    }
    else{
        resultText.textContent += '7';
    }
    lastadded = 'num';
})
document.getElementById('b8').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '8';
    }
    else{
        resultText.textContent += '8';
    }
    lastadded = 'num';
})
document.getElementById('b9').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '9';
    }
    else{
        resultText.textContent += '9';
    }
    lastadded = 'num';
})
document.getElementById('b0').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '0';
    }
    else{
        resultText.textContent += '0';
    }
    lastadded = 'num';
})
document.getElementById('b00').addEventListener('click', function(){
    if(resultText.textContent=='0'){
        resultText.textContent='';
        resultText.textContent += '00';
    }
    else{
        resultText.textContent += '00';
    }
    lastadded = 'num';
})
document.getElementById('bdot').addEventListener('click', function(){
    if(lastadded=="num"){
        if(resultText.textContent=='0'){
            resultText.textContent='.';
            resultText.textContent += '.';
        }
        else{
            resultText.textContent += '.';
        }
        lastadded = 'modifier';
    }
})
document.getElementById('bdivide').addEventListener('click', function(){
    if(lastadded=="num"){
        if(resultText.textContent=='0'){
            resultText.textContent='';
            resultText.textContent += '/';
        }
        else{
            resultText.textContent += '/';
        }lastadded = 'modifier';
    }
})
document.getElementById('bx').addEventListener('click', function(){
    if(lastadded=="num"){
        if(resultText.textContent=='0'){
            resultText.textContent='';
            resultText.textContent += '*';
        }
        else{
            resultText.textContent += '*';
        }lastadded = 'modifier';
    }
})
document.getElementById('badd').addEventListener('click', function(){
    if(lastadded='num'){
        if(resultText.textContent=='0'){
            resultText.textContent='';
            resultText.textContent += '+';
        }
        else{
            resultText.textContent += '+';
        }lastadded = 'modifier';
    }
})
document.getElementById('bsub').addEventListener('click', function(){
    if(lastadded=='num'){
        if(resultText.textContent=='0'){
            resultText.textContent='';
            resultText.textContent += '-';
        }
        else{
            resultText.textContent += '-';
        }lastadded = 'modifier';
    }
})
document.getElementById('bequal').addEventListener('click', function(){
    if(resultText.textContent != '0'){
        resultText.textContent = eval(resultText.textContent);
    }
})
