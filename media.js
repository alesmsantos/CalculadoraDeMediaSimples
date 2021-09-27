var media = () => {
    var nome = document.getElementById("nome").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var nota3 = document.getElementById("nota3").value
    var nota4 = document.getElementById("nota4").value
    var resultadoMedia = document.getElementById('resultadoDaMedia')

    var calculoDaMedia = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4
    if (calculoDaMedia > 7 && calculoDaMedia < 9){
        resultadoMedia.innerHTML = `O Aluno ${nome} foi aprovado com média. ${calculoDaMedia}`


    } else if( calculoDaMedia >= 9){
        resultadoMedia.innerHTML = `O Aluno ${nome} foi aprovado com média. ${calculoDaMedia}`

    } else {
        resultadoMedia.innerHTML = `O Aluno ${nome} foi reprovado. ${calculoDaMedia}`
    }

}