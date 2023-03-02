let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    console.log(a);
    console.log(b);
    console.log(c);

    let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)
    let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)

    let result1 = document.getElementById('result1')
    let result2 = document.getElementById('result2')

    result1.innerHTML = x1
    result2.innerHTML = x2

})

