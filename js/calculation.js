function getInputValue(inputID) {
    const input = document.getElementById(inputID);
    const inputAmountText = input.value;
    const inputAmount = parseFloat(inputAmountText);
    // error message 
    if (isNaN(inputAmount)) {
        const stringMessage = document.getElementById('string');
        stringMessage.style.display = 'block';
        return;
    };
    if (inputAmount < 0) {
        const negativeNumberMessage = document.getElementById('negative-number');
        negativeNumberMessage.style.display = 'block';
        return;
    };
    // clear input field
    input.value = '';
    return inputAmount;
};

//income input
function incomeInput() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmountText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputAmountText);
    // error message 
    if (isNaN(incomeInputAmount)) {
        const stringMessage = document.getElementById('string');
        stringMessage.style.display = 'block';
        return;
    };
    if (incomeInputAmount < 0) {
        const negativeNumberMessage = document.getElementById('negative-number');
        negativeNumberMessage.style.display = 'block';
        return;
    };
    return incomeInputAmount;

};

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
    if (totalExpensesAmount > incomeInputAmount) {
        const highPirce = document.getElementById('high-price');
        highPirce.style.display = 'block';
        return;
    }


    // balance 
    const balanceAvailable = incomeInputAmount - totalExpensesAmount;
    const balanceField = document.getElementById('balance');
    balanceField.innerText = balanceAvailable;


    // handle save button 
    document.getElementById('save-button').addEventListener('click', function () {
        const getSaveInputField = document.getElementById('save-input');
        const saveInputFieldText = getSaveInputField.value;
        const saveInputField = parseFloat(saveInputFieldText);

        // percentage
        const incomeInputAmount = incomeInput();

        const percentage = (incomeInputAmount / 100) * saveInputField;
        if (balanceAvailable < percentage) {
            highPercentage = document.getElementById('high-percentage');
            highPercentage.style.display = 'block';
            return;
        }

        const getSavingAmount = document.getElementById('saving-amount');
        getSavingAmount.innerText = percentage;

        // clear input field
        getSaveInputField.value = '';

        // remaining balance
        const getRemainingBalanceInput = document.getElementById('remainingBalanceField');
        const getRemainingBalanceInputText = getRemainingBalanceInput.innerText;
        const getRemainingBalance = parseFloat(getRemainingBalanceInputText);
        const remainingBalance = getRemainingBalance + incomeInputAmount - totalExpensesAmount - percentage;
        getRemainingBalanceInput.innerText = remainingBalance;
    });
});


