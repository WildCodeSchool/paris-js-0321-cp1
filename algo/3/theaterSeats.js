/*
[EN] Complete the theaterSeats function to return a matrix (array of arrays)
where each sub-array contains the position of the seats in a row.
example :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 

[FR] Compléter la fonction theaterSieges de manière à ce qu'elle retourne une matrice (tableau de tableaux)
où chaque sous-tableau liste les positions des sieges d'une rangée.
exemple :
[
  ['1-1', '1-2', '1-3', ..., '1-100'], 
  ['2-1', '2-2', '2-3', ..., '2-100'],
  ... 
  ['26-1', '26-2', '26-3', ..., '26-100']
] 
*/

function theaterSeats() {
    const numberOne=[];
    const numberTwo=[];
      for (let i=0;i<100;i++){
        const row=[]; 
        for (let j=0; j<100;j++){
          row.push (`${numberOne[i]} - ${numberTwo[j]}`);
          
          }
theaterSeats.push(row);
}
return theaterSeats
}



module.exports = theaterSeats;
