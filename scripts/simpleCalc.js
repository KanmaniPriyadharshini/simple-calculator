let display = document.getElementById("display").innerText;
//let result = document.getElementById("result").innerText;

let entry = (data) => {
    document.getElementById("display").innerText  = document.getElementById("display").innerText + data;
    
}

let cal = () => {
    try{
        document.getElementById("result").innerText = eval(document.getElementById("display").innerText);
    }
    catch(err){
        alert("The input is not valid");
        clr();
    }
}

let clr =() => {
    display="";
    document.getElementById("display").innerText = "";
    document.getElementById("result").innerText = "";
}

let del = () => {
    document.getElementById("display").innerText = document.getElementById("display").innerText.slice(0,-1);
    document.getElementById("result").innerText = "";
}