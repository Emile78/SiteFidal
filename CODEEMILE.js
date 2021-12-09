let radical = "pleur";
let pronoms = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
let terminaisonPresent = ["e", "es", "e", "ons","ez", "ent"];

//let terminaisonFutureSimple = ["ai","as","a","ons","ez","ont"];
//let terminaisonPasserSimple = ["ai","as,"a","ames","ates","arent",];
//let terminaisonImparfait = ["ais","ait","ions","iez","aient"];

let radicals = ['mang','march','travaill','salu','protég','légu','pleur','lev','jet','pay'];

 
for(let i=0;i<pronoms.length;i++){ 	
console.log(pronoms[i]+' '+radicals[i]+terminaisonPresent[i]);
}

function conjuguer(tableau,lesPronoms,lesTerminaisons){
 for(let j=0;j<tableau.lenght;j++){
	console.log("******** conjugaison du verbe ",tableau[j],"*********")
  for(let i=0;i<pronoms.lenght;i++){
    console.log(lesPronoms[i]+' '+tableau[j]+lesTerminaisons[i]);
  }
 }
}

conjuguer(radicals,pronoms,terminaisonPresent);







