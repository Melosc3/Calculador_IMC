import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)

    if (showAlertError) {
        console.log('mostrar o alerta de erro')
        return;
    }

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerHTML = message
    Modal.open()
}

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}