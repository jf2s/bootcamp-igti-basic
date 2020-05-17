const color = {r:128, g:128, b:128};
let show_result, input_red, input_green, input_blue = null;

window.addEventListener('load',start);

function start() {
    show_result = document.getElementById('show_result');
    input_red = document.getElementById('input_red');
    input_green = document.getElementById('input_green');
    input_blue = document.getElementById('input_blue');

    input_red.value = color.r;
    input_green.value = color.g;
    input_blue.value = color.b;
    showResult(show_result, color);
}
function setColor(rgb , value){
    switch (rgb) {
        case 'r':{
            changeInputValue(input_red, value);
            color.r = value;
            break;
        }
        case 'g':{
            changeInputValue(input_green, value);
            color.g = value;
            break;
        }
        case 'b':{
            changeInputValue(input_blue, value);
            color.b = value;
            break;
        }
        default: return;
    }
    showResult(show_result,color);
}

function setColorByElement(rgb , element){
    return setColor(rgb, element.value)
}

function showResult(element, color)
{
    let background = `rgb(${color.r},${color.g},${color.b})`;
    let color_text = 'rgb(255,255,255)';
    if(color.r>128 || color.g>128 || color.b>128)
        color_text = 'rgb(0,0,0)';

    element.setAttribute("style", `background-color: ${background}; color: ${color_text}`);
    element.innerHTML = `rgb(${color.r},${color.g},${color.b})`;
}

function changeInputValue(element, value) {
    element.value = value;
}