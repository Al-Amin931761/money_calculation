// handle calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    // income input field
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmountText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputAmountText);


    // food input field
    const foodInput = document.getElementById('food-input');
    const foodInputAmountText = foodInput.value;
    const foodInputAmount = parseFloat(foodInputAmountText);


    // rent input field 
    const rentInput = document.getElementById('rent-input');
    const rentInputAmountText = rentInput.value;
    const rentInputAmount = parseFloat(rentInputAmountText);



    // clothes input field
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputAmountText = clothesInput.value;
    const clothesInputAmount = parseFloat(clothesInputAmountText);

    // total cost 
    const totalCost = foodInputAmount + rentInputAmount + clothesInputAmount;


    // total expenses
    const getTotalExpenses = document.getElementById('total-expenses');
    const getTotalExpensesText = getTotalExpenses.innerText;
    const getTotalExpensesAmount = parseFloat(getTotalExpensesText);
    const totalExpensesAmount = getTotalExpensesAmount + totalCost;

    getTotalExpenses.innerText = totalExpensesAmount;


    // balance 
    const incomeInputField = document.getElementById('income-input');
    const incomeInputFieldText = incomeInputField.value;
    const incomeInputFieldAmount = parseFloat(incomeInputFieldText);

    const balanceAvailable = incomeInputFieldAmount - totalExpensesAmount;

    const balanceField = document.getElementById('balance');
    balanceField.innerText = balanceAvailable;
})