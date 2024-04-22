let x = 0;
let y = 0;
let res = 0;

    function newFun() {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
    let temp = x + " * " + y + " = ";
    document.getElementById("demo").innerHTML = temp;
    }

    function myFunction() {
    res = parseInt(document.getElementById("res").value);
    let temp = "";
    if (res === x * y) {
        temp = "Correct";
    } else {
        temp = "Incorrect";
    }
    document.getElementById("resDisplay").innerHTML = temp;
    }