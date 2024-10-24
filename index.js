
// Function to calculate the number of victories
function calculateVictoriesRankedMatches(victories, defeats) {
    let result = victories - defeats;
    return result;
}

// Function to determine the Hero's rank based on the result
function determineHerosRankLevel(result) {
    let rank = "";  //Starting value for the variable

    if(result <= 10) {   
        rank = "FERRO";
    }
    else if(result >= 11 && result <= 20) {
        rank = "BRONZE";
    }
    else if(result >= 21 && result <= 50) {
        rank = "PRATA";
    }
    else if(result >= 51 && result <= 80) {
        rank = "OURO";
    }
    else if(result >= 81 && result <= 90) {
        rank = "DIAMANTE";
    }
    else if(result >= 91 && result <= 100) {
        rank = "LENDÁRIO";
    }
    else {
        rank = "IMORTAL";
    }

    return rank; 
}

// Calculating the result and determining the rank
let result = calculateVictoriesRankedMatches(97, 3);  //Calculating Victories with values "97" for victories and "3" for defeats
let rank = determineHerosRankLevel(result);  

console.log("O Herói tem um saldo de vitórias de " + result + " e está no nível " + rank);