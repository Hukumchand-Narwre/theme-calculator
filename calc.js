


let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click',(e) => {
        switch (e.target.innerText) {
           case 'Reset': 
                display.innerText = '';
                break;
            case 'Del':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                

            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;    
            default:
                display.innerText += e.target.innerText;
        }
    })
})

// let display = document.getElementById('display');
let theme1 = document.getElementById("theme-1");
let theme2 = document.getElementById('theme-2');
let theme3 = document.getElementById('theme-3');
let buttonbox = document.getElementById('button-box');
let calc = document.getElementsByClassName('container-text');
let resetbutton = document.getElementsByClassName('reset-button');



theme1.addEventListener('click', function(){
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    buttonbox.classList.remove('container-text-theme-2');
    display.classList.remove('display-theme-2');
    theme2.classList.add('op-2');
    theme1.classList.remove('op-0');
    calc[0].classList.remove('greencolor');
    buttons.map(button => {
        button.classList.remove('greencolor');
    })

    theme3.classList.add('op-3')
    theme2.classList.remove('for-op-1');

    display.classList.remove('greencolor');
})

theme2.addEventListener('click', function(){
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    buttonbox.classList.add('container-text-theme-2');
    display.classList.add('display-theme-2');
    calc[0].classList.add('blackcolor');
    theme1.classList.add('op-0');
    // theme2.classList.remove('op-2');   
    theme2.classList.add('for-op-1')
    display.classList.remove('display-theme-3');
    buttonbox.classList.remove('container-text-theme-3');
    calc[0].classList.remove('greencolor');
    buttons.map(button => {
        button.classList.remove('greencolor');
    })
    // theme2.add.classList('op-1');
    theme3.classList.add('op-3');
    display.classList.remove('greencolor');
})

theme3.addEventListener('click', function() {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
     display.classList.add('greencolor');
    buttonbox.classList.add('container-text-theme-3');
    calc[0].classList.add('greencolor');
    buttons.map(button => {
        button.classList.add('greencolor');
    })
    theme3.classList.remove('op-3');
    theme1.classList.add('op-0');
    theme1.classList.remove('op-1');
    theme2.classList.add('op-0');
    theme2.classList.remove('for-op-1')

    resetbutton[0].classList.remove('greencolor');
    resetbutton[1].classList.remove('greencolor');
    
})

