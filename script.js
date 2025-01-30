let button1 = document.querySelector("#btn1");
let txt = document.querySelector('#txt1');

button1.addEventListener("click", () => {
    let a = document.querySelector('#inp1').value;
    let b = document.querySelector('#inp2').value;
    c = Number(a) + Number(b);

    txt.innerHTML = "Результат: " + (c);
})


let button2 = document.querySelector('#btn2');
button2.addEventListener('click', addCircle);

function addCircle() {
    let newCircle = document.createElement('div');
    tsk2.appendChild(newCircle);
    newCircle.classList.add('circle');

}