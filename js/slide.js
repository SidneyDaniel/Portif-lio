const lista_de_certificacoes = document.querySelector(".lista_de_certificacoes")
const firstImg = lista_de_certificacoes.querySelectorAll("img")[0]
const setas = document.querySelectorAll(".material-symbols-outlined")
// problema aqui no 14
let botaoApertado = false, mouseMovendo = false, prevPagex, prevScrollLeft, positionDiff;

const showHiddenIcon = ()=>{
    if (lista_de_certificacoes.scrollLeft == 0 ) {
        setas[0].style.display = "none"  
    }else{
        setas[0].style.display = "block"
    }

}

setas.forEach(icons => {
    icons.addEventListener("click",() =>{
      let firstImgWidth = firstImg.clientWidth + 14

      if(icons.id == "left"){
        lista_de_certificacoes.scrollLeft -= firstImgWidth
      }else{
        lista_de_certificacoes.scrollLeft += firstImgWidth
      }

     setTimeout(() => showHiddenIcon(),60) 
      
    })
});

const autoSlide = () => {
    if (lista_de_certificacoes.scrollLeft == (lista_de_certificacoes.scrollWidth - lista_de_certificacoes.clientWidth)) return 
        
    
    positionDiff = Math.abs(positionDiff)
    let firstImgWidth = firstImg.clientWidth + 14
    let valDifference =  firstImgWidth - positionDiff

    if (lista_de_certificacoes.scrollLeft > prevScrollLeft) {
        if (positionDiff > firstImgWidth / 3) {
            lista_de_certificacoes.scrollLeft += valDifference
        } else {
            lista_de_certificacoes.scrollLeft -= positionDiff
        }
    }else{
        if (firstImgWidth > positionDiff / 3) {
            lista_de_certificacoes.scrollLeft -= valDifference
        } else {
            lista_de_certificacoes.scrollLeft += positionDiff
        }
    }
    
}

const botaoClicado = (e) =>{
    botaoApertado = true
    prevPagex = e.pageX || e.touches[0].pageX
    prevScrollLeft = lista_de_certificacoes.scrollLeft
}

const mouseSeMovendo = (e) =>{
    if(!botaoApertado) return
    e.preventDefault()
    mouseMovendo = true
    lista_de_certificacoes.classList.add("mouseSeMovendo")
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPagex
    lista_de_certificacoes.scrollLeft = prevScrollLeft - positionDiff
    showHiddenIcon()
}

const mouseParou = () =>{
    botaoApertado = false
    lista_de_certificacoes.classList.remove("mouseSeMovendo")
    if (!mouseMovendo) return
    mouseMovendo = false
    autoSlide()

}

lista_de_certificacoes.addEventListener("mousedown", botaoClicado)
lista_de_certificacoes.addEventListener("touchstart", botaoClicado)

lista_de_certificacoes.addEventListener("mousemove", mouseSeMovendo)
lista_de_certificacoes.addEventListener("touchmove", mouseSeMovendo)

lista_de_certificacoes.addEventListener("mouseup", mouseParou)
lista_de_certificacoes.addEventListener("mouseuleave", mouseParou)
lista_de_certificacoes.addEventListener("touchend", mouseParou)
// 20:24