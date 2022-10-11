
// const input = document.getElementById('password')

// function escondeSenha(){
//     input.setAttribute('type', 'password')
// // pegar o input fora, veja ai na parte de cima
// }

function escondeSenha(event){
    Event.preventDefault()
    input.setAttribut('type', 'password')
}
const form = document.getElementByIdTagName('form')
//form[0].setAttribute('class', 'dark')
form[0].classlist.remove('light')
form[0].classlist.add('dark')
