function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com ',nota)
    }
}
soBoaNoticia(8.1)

function seForVerdadeiro(valor){
    if(valor){
        console.log('E verdade ....', valor)
    }
}
seForVerdadeiro()
seForVerdadeiro(null)
seForVerdadeiro(undefined)
seForVerdadeiro(NaN)
seForVerdadeiro('')
seForVerdadeiro(0)
seForVerdadeiro(-1)
seForVerdadeiro(' ')
seForVerdadeiro('?')
seForVerdadeiro([])
seForVerdadeiro([2,2,2])
seForVerdadeiro({})