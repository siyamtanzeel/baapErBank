let totalBalance =parseFloat( localStorage.getItem('currentBalance') || 0);
let totalWithdrawn = parseInt(localStorage.getItem('totalWithdrawn') || 0)
let totalDepositted = parseInt(localStorage.getItem('totalDepositted') || 0)
document.querySelector("#balance-value").innerHTML = totalBalance;
document.querySelector("#withdrawn-value").innerHTML = totalWithdrawn;
document.querySelector("#depositted-value").innerHTML = totalDepositted;

document.querySelector('#deposit-btn').addEventListener('click',deposit)
function deposit(){
    if(document.querySelector('#deposit-amount').value !== ''){
        if(!isNaN(document.querySelector('#deposit-amount').value)){
            localStorage.setItem('currentBalance',totalBalance += parseFloat(document.querySelector('#deposit-amount').value)) 
            localStorage.setItem('totalDepositted',totalDepositted += parseFloat(document.querySelector('#deposit-amount').value)) 
            document.querySelector("#balance-value").innerHTML = totalBalance;
            document.querySelector("#depositted-value").innerHTML = totalDepositted;
        }
    }
}
document.querySelector('#withdraw-btn').addEventListener('click',withdraw)
function withdraw(){
    if(document.querySelector('#withdraw-amount').value !== ''){
        if(!isNaN(document.querySelector('#withdraw-amount').value)){
            localStorage.setItem('currentBalance',totalBalance -= parseFloat(document.querySelector('#withdraw-amount').value)) 
            localStorage.setItem('totalWithdrawn',totalWithdrawn += parseFloat(document.querySelector('#withdraw-amount').value)) 
            document.querySelector("#balance-value").innerHTML = totalBalance;
            document.querySelector("#withdrawn-value").innerHTML = totalWithdrawn;
        }
    }
}
