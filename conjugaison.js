// Expression de besoin 
//
// J'aimerais choisir un verbe du premier groupe et le conjuguer au pésent
// Exemple : aimer
// j'aime
// tu aimes
// il/elle aime
// nous aimons
// vous aimez
// ils/elles aiment


// Analyser
// 
// aimer => 1er Groupe donc se termine en -er 
// donc je peux le couper en deux aim-er
// aim : radical
// er : ext

// j'        aim     e
// tu        aim     es
// il/elle   aim     e
// nous      aim     ons
// vous      aim     ez
// ils/elles aim     ent

// si la premiere lettre du radical est une voyelle alos "j'" sinon "je"
// le radical c'est le verbe moins er : les deux dernières lettres
// lanc(er)
// les terminaisons sont constantes e, es, e, ons, ez, ent

// Conception
// un tanbleau pour les pronoms
// un tableau pour les terminaisons 


// Codage
let radical = "pleur";
let pronoms = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
let terminaisonPresent = ["e", "es", "e", "ons","ez", "ent"];

//let terminaisonFutureSimple = ["ai","as","a","ons","ez","ont"];
//let terminaisonPasserSimple = ["ai","as,"a","ames","ates","arent",];
//let terminaisonImparfait = ["ais","ait","ions","iez","aient"];

//let radicals = ['mang','march','travaill','salu','protég','légu','pleur','lev','jet','pay'];


//conjujgaison du verbe accepter au présent 
for(let i=0;i<pronoms.length;i++){ 	
console.log(pronoms[i]+' '+radical+terminaisonPresent[i]);
}

function conjuguer(tableau_verbes){
for(let i=0;i<pronoms.lenght;i++){
console.log(pronoms[i]+' '+radical+terminaisonPresent[i]);
}

}

conjuguer(radicals);



