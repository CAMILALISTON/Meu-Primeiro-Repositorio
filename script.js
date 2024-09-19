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
function CalcularIdade(){
    let inpIdade = document.getElementById('inpIdade').value
    let idade = inpIdade
    if(inpIdade > 17){
        document.getElementById('pId').innerHTML = ("Voce já é maior de idade, pois tem " + idade);
    }
    else
    document.getElementById('pId').innerHTML = ("Você não é maior de idade, pois tem " + idade);
}

function executar1008(){
    let id
    let horas
    let valorHora
    let salario
    id = Number(prompt("Digite seu ID: "));
    horas = Number(prompt("Quantas horas você trabalhou?"));
    valorHora = Number(prompt("Quanto você recebe por hora?"));

    salario = horas * valorHora
        alert("ID: "+id + "\nSalário: R$"+ salario.toFixed(2))
}

function executar1009(){
    let id
    let salario
    let totalVendas
    let comissao
    id = Number(prompt("Digite seu ID: "));
    salario = Number(prompt("Qual o seu salário?"));
    totalVendas = Number(prompt("Qual o valor de vendas que voce realizou?"));

    comissao = (totalVendas*0.15)+salario
    alert("ID: "+id + "\nSalário R$" +comissao.toFixed(2));
}
