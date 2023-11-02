let listaDeEstudantes = [
   {
       nomeDoEstudante: 'Jefferson',
       primeiraNota: 6,
       segundaNota: 9,
   },

   {
       nomeDoEstudante: 'Gislaine',
       primeiraNota: 5,
       segundaNota: 3,
   },

   {
       nomeDoEstudante: 'Allana',
       primeiraNota: 8,
       segundaNota: 8,
   }, 
   
   {
      nomeDoEstudante: 'Lavínia',
      primeiraNota: 8,
      segundaNota: 8,
   }
]

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2
return media
}  

for(let estudante of listaDeEstudantes){
   mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
   let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

   alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}