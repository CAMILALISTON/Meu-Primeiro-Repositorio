function calcularIMC(){
    let peso = document.getElementById('inpPeso').value
    // console.log(document.getElementById('inpPeso')).value;
    
    let altura = document.getElementById('inpAltura').value
   
    let imc = peso / (altura**2)
    // let imc = peso / (altura * altura) outra opção para calcular o numero por ele mesmo
    
    // document.getElementById('inpResultado').value = "Seu IMC é: "+imc

    document.getElementById('pResultado').innerHTML = "Seu IMC é: "+imc
    // alert("Se fosse o Jack, ele diria que o imc é: "+imc)    
    
}

function calcularIDcachorro(){
    let inpIdadeCachorro = document.getElementById('inpIdadeCachorro').value
    let idade = inpIdadeCachorro*7
    if(idade > 65){
        document.getElementById('pIdade').innerHTML = ("Seu cachorro pode se aposentar pois a idade dele é: " + idade)
    }
    else
    document.getElementById('pIdade').innerHTML = ("Seu cachorro não pode se aposentar pois a idade dele é: " + idade)

}