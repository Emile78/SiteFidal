//let radical = "pleur";
let pronoms = ["je ", "tu ", "il/elle ", "nous ", "vous ", "ils/elles "];
let terminaisonPresent = ["e", "es", "e", "ons", "ez", "ent"];
let pronomsVoyelle = ["j'","tu ", "il/elle ", "nous ", "vous ", "ils/elles "];
let terminaisonFutureSimple = ["ai","as","a","ons","ez","ont"];
let terminaisonImparfait = ["ais","ais","ait","ions","iez","aient"];
let voyelle = ['a','e','i','o','u','y']
let terminaisonPasserSimple = ["ai","as","a","ames","ates","aient"];
let radicals = ['dans', 'tir', 'travaill', 'salu', 'protég', 'légu', 'pleur', 'lev', 'jet', 'pay','essay'];


//for(let i=0;i<pronoms.length;i++){ 	
//console.log(pronoms[i]+' '+radicals[i]+terminaisonPresent[i]);
//}


console.log("************ conjugaison au présent *********************");
conjuguer(radicals, pronoms, terminaisonPresent);




console.log("************ conjugaison au Future simple *********************");

conjuguer(radicals, pronoms, terminaisonFutureSimple);



console.log("************ conjugaison au passé simple*********************");

conjuguer(radicals, pronoms, terminaisonPasserSimple);



console.log("************ conjugaison à l'imparfait *********************");
conjuguer(radicals, pronoms, terminaisonImparfait);



function conjuguer(table, lesPronoms, lesTerminaisons) {
  for (let j = 0; j < table.length; j++) {
    console.log("******** conjugaison du verbe "+ table[j]+"er " +"*********");

    let pronoms = lesPronoms;

    let mon_verbe = table[j];
    let premiere_lettre=mon_verbe[0];

    if (premiere_lettre = voyelle 
        pronoms = pronomsVoyelle;
    }
    for (let i = 0; i < pronoms.length; i++) {
      console.log(pronoms[i] + table[j] + lesTerminaisons[i]);
    }

  }
}





      

