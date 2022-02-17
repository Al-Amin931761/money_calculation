// handle calculate button
document.getElementById('calculate-button').addEventListener('click', function () {
    // income input field
    const incomeInput = document.getElementById('income-input');
    const incomeInputAmount = incomeInput.value;
    console.log(incomeInputAmount);

    // food input field
    const foodInput = document.getElementById('food-input');
    const foodInputAmount = foodInput.value;
    console.log(foodInputAmount);

    // rent input field 
    const rentInput = document.getElementById('rent-input');
    const rentInputAmount = rentInput.value;
    console.log(rentInputAmount);

    // clothes input field
    const clothesInput = document.getElementById('clothes-input');
    const clothesInputAmount = clothesInput.value;
    console.log(clothesInputAmount);
})