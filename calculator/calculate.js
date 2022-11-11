let outputScreen = document.getElementById("result");

function display(num){
    result.value += num;
}

function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch{
       alert("Invalid");
    }
}
function Clear (){ 
    outputScreen.value = "";
}

function del (){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
