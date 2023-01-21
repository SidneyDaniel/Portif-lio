
var input = document. querySelector('[data-type="nome"]');
var buttom = document.querySelector('[data-type="enviar"]')

buttom.addEventListener('click',function(e) {
    alert(input.value);
    console.log(input.value);
    e.preventDefault()
})

var texto = input. value;
console. log(texto);

function enviaEmail(params) {
    
}