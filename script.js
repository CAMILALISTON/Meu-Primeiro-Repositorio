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

function executar1010(){
    let id = Number(prompt("Digite qual produto deseja cadastrar:"));
    let qdt  = Number(prompt("Digite a quantidade do produto"));
    let valor = Number(prompt("Digite o valor unitario do produto"));
    let id2 = Number(prompt("Digite qual produto deseja cadastrar:"));
    let qdt2  = Number(prompt("Digite a quantidade do produto"));
    let valor2 = Number(prompt("Digite o valor unitario do produto"));

    let valorTotal = (qdt+qdt2)*(valor+valor2)

    alert("O valor a pagar é: R$"+valorTotal.toFixed(2));
}

function executar1011(){
    let raio = Number(prompt("Digite o raio da esfera:"));
    let pi = 3.14159
    let volume = (4/3) * pi * Math.pow(raio,3)

   alert("O volume é: "+volume.toFixed(3))
}

function executar1012(){
    let ladoA = Number(prompt("Digite o lado A:"));
    let ladoB = Number(prompt("Digite o lado B:"));
    let base = Number(prompt("Digite o tamanho da base:"));
    let pi = 3.14159;
    let triangulo = (ladoA*base)/2;
    let circulo = pi*(base*base);
    let trapezio = ((ladoA+ladoB)*base)/2;
    let quadrado = ladoB*ladoB
    let retangulo = ladoA*ladoB

    alert("Triangulo: "+triangulo +"\nCirculo: " +circulo + "\nTrapezio: "+trapezio + "\nQuadrado: "+quadrado + "\nRetangulo: "+retangulo)
}

// function executar1013(){
//     let valorA = Number(prompt("Digite o valor:"));
//     let valorB = Number(prompt("Digite o valor:"));
//     let valorC = Number(prompt("Digite o valor:"));
//     let abs = 0
//     let maior = (valorA+valorB+abs(valorA+valorB))/2

//     alert("O maior valor é: "+maior)

// }

function executar1014(){
    let distanciaTotal = Number(prompt("Digite a distancia percorrida em Km:"));
    let combustivelTotal = Number(prompt("Digite o quanto de combustivel foi gasto em Litros:"));
    let consumo = distanciaTotal/combustivelTotal

    alert("O consumo do seu veiculo foi de "+consumo.toFixed(3)+"km/l")

}

function executar1015(){
    let x1 = Number(prompt("Digite o valor:"));
    let x2 = Number(prompt("Digite o valor:"));
    let y1 = Number(prompt("Digite o valor:"));
    let y2 = Number(prompt("Digite o valor:"));
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); 

    alert("A distancia é: "+distancia)
}

// function executar1016(){
//     let carrox = 60
//     let carroy = 90
//     let tempo = 60



// }

function executar1017(){
    let kml = Number(prompt("Digite a km/litro que seu carro realiza:"));
    let tempo = Number(prompt("Digite o tempo da viagem:"));
    let velocidade = Number(prompt("Digite a velocidade media:"));
    let combustivelgasto = (tempo*velocidade)/kml 
    
    alert("O combustivel gasto é de: "+combustivelgasto.toFixed(3));
}
