let input = document.querySelector('.text input');
let btns = document.querySelectorAll('.btn');
console.log(typeof input.value);
console.log(btns);
btns[0].addEventListener("click", () => {
    input.value = "";
});
btns[1].addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
const evaluate = function () {
    let ans = eval(input.value);
    console.log(ans);
    console.log(typeof input.value);
    input.value = ans;
}
btns.forEach((value, index) => {
    // if(index <= 1) continue;
    let toadd = value.textContent;

    if (toadd == 'X') toadd = '*';
    else if (toadd == '^') toadd = '**';
    if (toadd !== 'C' && toadd !== '<' && toadd !== '=') {
        // console.log(toadd === '<');
        value.addEventListener("click", () => {
            input.value += toadd;
        });
    }
    else if (toadd === '=') {
        value.addEventListener("click", () => {
                evaluate();
        });
    }
});
input.addEventListener("keyup" , (event)=>{
    if(event.keyCode === 13) evaluate();
});




