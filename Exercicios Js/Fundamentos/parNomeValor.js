//par nome/valor
const saudacao = 'opa' //contexto lexico 1

function exec(){
    const saudacao = 'falaa' //contexto lexico 2
    return saudacao
}
//objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome : 'pedro',
    idade : 32,
    peso : 90,
    endereco:{
        logradouro : 'Rua Muito Legal',
        numero : 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)