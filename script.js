document.getElementById('demoButton').addEventListener('click', function() {
    calculateSum();
});

function calculateSum() {
    let numbers = [10, 20, 30, 40, 50];
    let sum = 0;

    for (let i = 0; i <= numbers.length; i++) {
        sum = sum + numbers[i];
    }

    document.getElementById('output').textContent = 'Sum is: ' + sum;
}
