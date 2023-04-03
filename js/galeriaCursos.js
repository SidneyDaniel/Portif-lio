let curso1 = document.getElementById('curso1')
let curso2 = document.getElementById('curso2')
let curso3 = document.getElementById('curso3')
let curso4 = document.getElementById('curso4')


function showImage(imageSrc, title, text, Curso, duracaoCurso) {
    document.getElementById('display-image').src = imageSrc
    document.getElementById('display-title').innerHTML = title
    document.getElementById('display-text').innerHTML = text
    document.getElementById('display-curso').innerHTML = Curso
    document.getElementById('display-duracao').innerHTML = duracaoCurso
    
}

window.onload = function(){
    showImage('./assets/images/Instituicoes/1.png',
     'Uninter', 
     'O Centro Universitário Internacional UNINTER foi criado em 2012, a partir da fusão entre a Faculdade Internacional de Curitiba (FACINTER) e a Faculdade de Tecnologia de Curitiba (FATEC), com o objetivo de transpor barreiras geográficas para levar ensino de qualidade a todo o Brasil.',
     'Análise e Desenvolvimento de Sistemas - ADS',
     '02/2022 - 06/2024'
     )
}

curso1.onmouseover = function() {
    showImage('./assets/images/Instituicoes/1.png',
    'Uninter', 
    'O Centro Universitário Internacional UNINTER foi criado em 2012, a partir da fusão entre a Faculdade Internacional de Curitiba (FACINTER) e a Faculdade de Tecnologia de Curitiba (FATEC), com o objetivo de transpor barreiras geográficas para levar ensino de qualidade a todo o Brasil.',
    'Análise e Desenvolvimento de Sistemas - ADS',
    '02/2022 - 06/2024'
    )
}

curso2.onmouseover = function() {
    showImage('./assets/images/Instituicoes/2.png',
    'Alura', 
    'A Alura compõe o maior ecossistema de ensino em tecnologia do Brasil e tem como missão transformar vidas e carreiras.',
    'Front-end',
    'Cursando'
    )
}

curso3.onmouseover = function() {
    showImage('./assets/images/Instituicoes/3.png', 
    'Senac', 
    'Desde 1946, o Serviço Nacional de Aprendizagem Comercial – Senac é o principal agente de educação profissional voltado para o Comércio de Bens, Serviços e Turismo do País.',
    'Técnico em Contabilidade',
    '01/2021 - 02/2022'
    )
}

curso4.onmouseover = function() {
    showImage('./assets/images/Instituicoes/4.png', 
    'OracleNext', 
    'O ONE é um programa de educação e empregabilidade com objetivo social de capacitar pessoas em tecnologia e conectá-las com o mercado de trabalho por meio de empresas parceiras.',
    'Front-end developer',
    '06/2022 - 02/2023'
    )
}


