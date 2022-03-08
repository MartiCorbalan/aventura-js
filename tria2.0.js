let readlineSync = require('readline-sync');
 
// Wait for user's response.
let user = readlineSync.question('May I have your name? ');
console.log('Hi ' + user + '!');

/*
//// primera part
console.log('aquesta historia tracta sobre una persona que ha de decidir el seu futur a partir de les opcions que trii.')
console.log('si decideixes seguir, escriu SI, i si vols que el programa acabi escriu NO')

//// segona part
user = readlineSync.question('que vols esciure? ');

//// tercera part a
if(user === 'si'){
    console.log('s-ha acabat')
}else{
    /// tercera part b
    if(user === 'no'){
        console.log('adeu')
    }
}
*/
///// funcions /////////////
console.log(`  _________ _______ .. ..
/   __/\_    _/  _  \\___   \_    _/ | | | |
\___  \   |    | /  /_\  \|       _/ |    |    | | | |
/        \  |    |/    |    \    |   \ |    |     \|  \|
/___  /  |_|\_|_  /_|_  / |_|     _  __
       \/                 \/       \/             \/  \/ `);


let global = false;

entrada();
preguntar();
triar(user);
if(global === true){
    //continuar();
triarquefer(user);
}


// per fer funcio amb return
/*
let aux = triar();
if(aux === true){
    //continuar();
triarquefer(user);

}*/


function entrada(){

    console.log('aquesta historia tracta sobre una persona que ha de decidir el seu futur a partir de les opcions que trii.')
    console.log('si decideixes seguir, escriu SI, i si vols que el programa acabi escriu NO')

}

function preguntar(){
    user = readlineSync.question('que vols esciure? ');
}


function triar(user){ //aquesta quan usuari diu que si

    //let probar = false; //per funcio amb return

    if(user.toLowerCase() === 'si'){
        global = true;
        console.log('has decicit continuar amb la historia')
        continuar();
    }else{
        if(user.toLowerCase() === 'no'){

        acabar();
        
        }
        
    }
    /* // per funcio return
    if(user === 'si'){
        probar = true;
        console.log('has decicit continuar amb la historia')
        continuar();
    }else{
        if(user === 'no'){

        acabar();
        
        }
        
    }*/

    //return probar; //funcio return
}


function acabar(){ //aquesta quan usuari diu que no
  console.log('aquesta historia s-ha acabat!')
  global = false;
} 
 
function continuar(){
    console.log(' vaja t-has trobat amb el señor PEKKA, aixo es un enemic poderos ');
    user = readlineSync.question(' escriu 1 si vols atacar o 2 si vols surtir corrent com un Montapuercos o 3 per si vols anar per un cami alternatiu. \n');
    triarquefer(user);
}

function triarquefer(user){
    if(user === '1'){
        console.log(' has decidit atacar, tira una torre infernal o una bandida ');
        console.log(` depen del que triïs guanyaràs la batalla o et donarà tal wantazo que t'enviara a aña \n`)
        atacar();
    }
    if(user === '2'){
        console.log(' has decidit sortir corrents com un champion ');
        console.log(' no tornis per aqui bobo \n')
        acabar();
    }  
    
    if(user === '3'){
      console.log(' has decidit agafar el cami alternatiu, aquest cami es mes llarg');
      triarcamiAlternatiu();
    }
}

function triarcamiAlternatiu(){
  console.log(`durant aquest trajecte, et trobaràs amb diferents enemics, uns més poderosos que altres, a veure si ets capaç de sortir viu :) `);
  user = readlineSync.question(' escriu "continuar" o "sortir": \n');
  seguirCamiAlternatiu(user);

}

function seguirCamiAlternatiu(user){
      if(user === 'continuar'){
        console.log('has decidit continuar, t-has trobat amb un caballer, aquest es un enemic fluix, utilitza atac numero 1 (clickant 1) per derrotarlo facilment o 2 per utilitzar el escut per defensarte. ');
        //user = readlineSync.question(' escriu "1" o "2": \n');
        continuarAlternatiu(user);
      }
      if(user === 'sortir'){
        console.log('has decidit sortir, no se perque has triat aquesta opcio ja que podies sortir a la opcio anterior ^^ ');
        acabar();
      }
}

function continuarAlternatiu(){
  console.log('escriu 1 o 2  ');
  user = readlineSync.question('que vols esciure? \n');
  atacarAlternatiu();
  global = false;
}

function atacarAlternatiu(){
    if(user === '1'){
    console.log(' has decidit atacar, has acabat amb el enemic ');
    console.log('el seguent enemic es l-ultim abans del boss final \n');
    anarAlBoss(user);
    }
    if(user === '2'){
      console.log('has decidit defensarte, '); // acabar aquesta part
      defensa();
    }
}

function defensa(){
  console.log(' ara et toca atacar ');
  console.log(' escriu 1 si vols intentar acabar de un sol cop o 2 si vols seguir lluitant ');
  user = readlineSync.question('que vols escirure ? \n')
  defensaAtacar();
  global = false;
}

function defensaAtacar(){
    if(user === '1'){
      console.log(' has acabat amb el enemic d-un sol cop, continua amb el seguent enemic \n')
      anarAlBoss();
    }
    if(user === '2'){
      console.log(' has decidit atacar normal, aixo s-ha convertit en un toma i daca')
      console.log('el caballer t-ha atacat i estas ferit, pots o defensar-te o atacar ')
      console.log(' 1 per atacar o 2 per defensarte')
      user = readlineSync.question('que vols decidir? \n')

      if(user === '1'){
        console.log('has decidit atacar, pens que estas molt debil i podries morir \n')
        acabar5();
      }
      if(user === '2'){
        console.log('has decidit defensar-te, es la millor opcio per guardar forses')
        console.log(' ataca si vols acabar amb aquest enemic');
        console.log('escriu atacar per matar a l-enemic i continuar')
        user = readlineSync.question('que vols decidir? \n')
        acabarAmbEnemic(); // *
      }
    }
}

function acabarAmbEnemic(){ //*
    if(user === 'atacar'){
      console.log(' has matat al Caballer, segueix endevant i aconsegueix el tresor \n');
      anarAlBoss();
    }
}


function anarAlBoss(){
  console.log(' vaja! t-has trobat amb el Drac Manolo, es un enemic super poderos ');
  console.log(' per derrotar aquest enemic, has d-utilitzar tota la teva forssa.');
  console.log(' escriu "1" per atacar amb tot el que tens.');
  user = readlineSync.question('atacaaaar !! \n');
  atacarDrac();
  global = false;
}

function atacarDrac(){
  if(user === '1'){
    console.log(' la batalla a estat molt dura, pero al final has derrotat al Drac Manolo ');
    console.log(' ara et toca lluitar amb el boss final jeje \n')
    bossFinal(user);
  }
}

function bossFinal(){
  console.log(' el boss final es un Cerber, un gos de 3 caps mitologic super poderos');
  console.log(' tens dues opcions per derrotar-lo, atacar amb tot el que tens utilitzant habilitats especials o tocant musica, tu sabras:');
  console.log(' 1 per atacar o 2 per tocar musica');
  user = readlineSync.question('que vols decidir? \n');
  atacarBossFinal();
  global = false;
}

function atacarBossFinal(){
  if(user === '1'){
    console.log('has decidit atacar amb tot, pero lamentablement has perdut i t-ha matat, hauries de saber que per derrotar un Cerber, has de tocar musica perque es dormi \n')
    acabar3();
  }
  if(user === '2'){
    console.log('has triat la opcio correcte, veig que ets inteligent, has adormit al Cerber i has aconseguit el tresor \n');
    acabar4();
  }
}

/// acabar cami alternatiu

function atacar(){
    console.log('per utilitzar la torre infernal, escriu 1 i per la bandida escriu 2');
    user = readlineSync.question('que vols esciure? \n');
    triarAtacar(user);
}

function triarAtacar(user){
    if(user === '1'){
        console.log('has decidit utilitzar la torre infernal');
        console.log(`la torre infernal es una arma que destrueix el PEKKA en un moment, has agafat l'opcio mes optima \n`)
        acabar2();
    }
    if(user === '2'){
        console.log('has decidit utilitzar la bandida');
        console.log('la bandida es molt useles contra un PEKKA, has perdut. \n')
        acabar();
    }   
}

function acabar2(){
    console.log('has destruit al PEKKA, enhorabona, ets un geni ')
    global = false;
}

function acabar3(){
  console.log('has mort, torna el proxim dia');
  global = false;
}

function acabar4(){
  console.log(' has acabat amb tots els enemics, ets un crack, que guay!!');
  global = false;
}

function acabar5(){
  console.log('t-has desengrat, has mort')
  global = false;
}
