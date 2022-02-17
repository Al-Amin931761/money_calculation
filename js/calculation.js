function getInputValue(inputID) {
    const foodInput = document.getElementById(inputID);
    const foodInputAmountText = foodInput.value;
    const foodInputAmount = parseFloat(foodInputAmountText);
    // clear input field
    foodInput.value = '';
    return foodInputAmount;
}

//income input
function incomeInput() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmountText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputAmountText);
    return incomeInputAmount;
}


// handle calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    // income input field
    const incomeInputAmount = incomeInput()

    // food input field
    const foodInputAmount = getInputValue('food-input');

    // rent input field 
    const rentInputAmount = getInputValue('rent-input');

    // clothes input field
    const clothesInputAmount = getInputValue('clothes-input');

    // total cost 
    const totalCost = foodInputAmount + rentInputAmount + clothesInputAmount;


    // total expenses
    const getTotalExpenses = document.getElementById('total-expenses');
    const getTotalExpensesText = getTotalExpenses.innerText;
    const getTotalExpensesAmount = parseFloat(getTotalExpensesText);
    const totalExpensesAmount = getTotalExpensesAmount + totalCost;

    getTotalExpenses.innerText = totalExpensesAmount;


    // balance 
    const balanceAvailable = incomeInputAmount - totalExpensesAmount;

    const balanceField = document.getElementById('balance');
    balanceField.innerText = balanceAvailable;
});


// handle save button 
document.getElementById('save-button').addEventListener('click', function () {
    const getSaveInputField = document.getElementById('save-input');
    const saveInputFieldText = getSaveInputField.value;
    const saveInputField = parseFloat(saveInputFieldText);

    // percentage

    //income input
    const incomeInputAmount = incomeInput();

    const percentage = (incomeInputAmount / 100) * saveInputField;
    // console.log(percentage);

    const getSavingAmount = document.getElementById('saving-amount');
    getSavingAmount.innerText = percentage;
    // clear input field
    getSaveInputField.value = '';
})