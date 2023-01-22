var nome = document. querySelector('[data-type="nome"]');
var email = document.querySelector('[data-type="email"]');
var assunto = document.querySelector('[data-type="assunto"]')
var mensagem = document.querySelector('[data-type="mensagem"]')
var buttom = document.querySelector('[data-type="enviar"]');
var email = "sidneydaniel17@gmail.com"

function formularioDeEnvio() {
    console.log(nome.value);


    window.open('mailto:'+email+"?subject="+nome.value+assunto.value+"&body="+mensagem.value+"%20goes%20here");
    e.preventDefault();
}


buttom.addEventListener('click',function(e) {
    formularioDeEnvio();
})



