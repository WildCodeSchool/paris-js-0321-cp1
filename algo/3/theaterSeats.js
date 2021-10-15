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
  let seats = [1, 2, 3, 4, 5, 6, 7, 8, 100];
    let rows = [1, 2, 3, 4, 5, 6, 7, 8, 100];

    const theater = [];
    
    for(let i = 0; i<seats.length; i++){
        let arrayOne = [];
        // console.log (columns[i])
            for (let j = 0; j < rows.length; j++){
            // console.log(rows[j]);
            arrayOne.push(`${seats[i]} - ${rows[j]}`)
        }
        theater.push(arrayOne)
    } 
    console.log(theater)

    return theater;
}


module.exports = theaterSeats;