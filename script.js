const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let sum = 0;
document.getElementById('budgetSubmit').onclick = function(){
    let budget =  document.getElementById('budgetVal').value;
    document.getElementById('budget').innerHTML =  '<p class="budSub">'+ budget + '</p>';
}
document.getElementById('expSubmit').onclick = function(){
    let expenses =  document.getElementById('expense').value
    let expVal = document.getElementById('expenseVal').value;
    document.getElementById('costList').innerHTML += '<p class="ert1">' + expVal + '</p>';
    document.getElementById('list').innerHTML += '<li class="ert">' + expenses  + '</li>';
    sum = sum + parseFloat(document.getElementById('expenseVal').value);
    showBalance()

}
function showBalance (){
    let parsed = parseFloat(document.getElementById("budgetVal").value); 
    // let parsed2 = parseFloat(document.getElementById('expenseVal').value);
    parsed = parsed - sum
    document.getElementById('balEv').innerHTML += '<p class="balSub">'+ parsed + '</p>';
    console.log(parsed)
}