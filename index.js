var numbers = []
function shuffle() {
    numbers = [];
    for (let index = 1; numbers.length < 9; index++) {
        let number = Math.floor((Math.random() * 10) + 1);
        if (numbers.filter(num => num == number).length == 0 && number != 10) { numbers.push(number); }
    }
    populate();
}
function sort() {
    numbers = numbers.sort((a, b) => a - b);
    populate();
}

function populate() {

    let grid = `<div class="row">`;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        grid += `<div class="cell color-${element}"><span>${element}</span></div>`;

    }

    grid += `</div>`;
    document.getElementById('left').innerHTML = grid;
}