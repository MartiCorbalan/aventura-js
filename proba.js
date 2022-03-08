let indexpagina = 0;

const historia = [{
    //0
    text: "aquesta historia tracta sobre una persona que ha de decidir el seu futur a partir de les opcions que trii. \n" +  
          "si decideixes seguir, escriu SI, i si vols que el programa acabi escriu NO \n" +
          "que vols escriure? ",
    si: 1,
    no: 2,
}, 
{
    //1
    text: "has decicit continuar amb la historia",
    si: 3,
    //no: 2,
}, 
{
    //2
    text: "aquesta historia s-ha acabat!",
    no: 1,
}, 
{
    //3
    text: "vaja t-has trobat amb el señor PEKKA, aixo es un enemic poderos \n" +  
          " escriu 1 si vols atacar o 2 si vols surtir corrent com un Montapuercos",
    si: 4,
    no: 5,
}, 
{
    //4
    text: "has decidit atacar, tira una torre infernal o una bandida \n" +
    "depen del que triïs guanyaràs la batalla o et donarà tal wantazo que t'enviara a aña",
    si: 6,
},
{
    //5
    text: "has decidit sortir corrents com un champion \n" +
    "no tornis per aqui bobo",
    si: 2,
},
{
    //6
    text: "per utilitzar la torre infernal, escriu 1 i per la bandida escriu 2 \n" +
          "que vols esciure?",
    si: 7,
    no: 8,
},
{
    //7
    text: "has decidit utilitzar la torre infernal \n" +
          "la torre infernal es una arma que destrueix el PEKKA en un moment, has agafat l'opcio mes optima",
    si: 9 
},
{
    //8
    text: "has decidit utilitzar la bandida \n"+
          "la bandida es molt useles contra un PEKKA, has perdut.",
},
{
    //9
    text: "has destruit al PEKKA, enhorabona, ets un geni"
}
];



function preguntarSiNo(){
    
}



while(indexpagina >= 0){
    let pagina = historia[indexpagina];
    console.log(pagina.text);
    //pregunta...
    //si resposata = si : numpagina = pagina.si   
}

