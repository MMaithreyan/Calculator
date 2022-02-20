function display(val){
    document.getElementById("result").value+=val;
    return val;
}
function solve(){
    var cal = document.getElementById("result").value;
    var ans = eval(cal);
    document.getElementById("result").value = ans;
}
function clearScreen(){
    document.getElementById("result").value ="";
}