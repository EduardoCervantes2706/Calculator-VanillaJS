'use strict'

const Calculator = () => {
    const buttons = document.getElementsByClassName("button")
    const display = document.getElementById("display-text")
    let displayValue = ""
    display.innerText = displayValue
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", () => {
            if (buttons[index].textContent != "=" && buttons[index].textContent != "C") {
                if (buttons[index].textContent == "⋅") {
                    display.append(".")
                } else {
                    display.append(buttons[index].textContent)
                }
            } else if (buttons[index].textContent == "=") {
                buttons[index].addEventListener("click", () => {
                    try {
                        let resultado = eval(display.textContent)
                        display.innerText = resultado
                    } catch(error) {
                        display.textContent = "Syntax Error"
                    }
                    
                })
            } else if (buttons[index].textContent == "C") {
                display.textContent = ""
            }
        })
    }
}

export default Calculator