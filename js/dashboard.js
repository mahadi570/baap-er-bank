const oldDepositAmount = document.getElementById('old-deposit-amount');
const depositAmount = document.getElementById('deposit-amount');
const oldWithdrawAmount = document.getElementById('old-withdraw-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const totalAmount = document.getElementById('total-amount');



// Deposit Button Actions
document.getElementById('deposit-btn').addEventListener('click', function () {
    const oldDepositAmountValue = parseFloat(oldDepositAmount.innerText);

    const depositAmountValue = parseFloat(depositAmount.value);

    const totalAmountValue = parseFloat(totalAmount.innerText);

    if (depositAmountValue > 0) {
        const newDepositAmount = oldDepositAmountValue + depositAmountValue;
        oldDepositAmount.innerText = newDepositAmount;
        totalAmount.innerText = totalAmountValue + depositAmountValue;
    }
    else {
        alert('Your Amount is not Depositable');
    }
    depositAmount.value = '';
})

// Withdraw Button Actions
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const oldWithdrawAmountValue = parseFloat(oldWithdrawAmount.innerText);

    const withdrawAmountValue = parseFloat(withdrawAmount.value);
    const totalAmountValue = parseFloat(totalAmount.innerText);

    if (withdrawAmountValue > 0) {

        const newWithdrawAmount = oldWithdrawAmountValue + withdrawAmountValue;

        if (withdrawAmountValue <= totalAmountValue) {
            oldWithdrawAmount.innerText = newWithdrawAmount;
            totalAmount.innerText = totalAmountValue - withdrawAmountValue;
        }
        else {
            alert("You don't have sufficient balance to withdraw")
        }
    }
    else {
        alert('Your Amount is not Withdrawable');
    }
    withdrawAmount.value = '';
})
