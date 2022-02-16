// Add to functions to setValues
const confirmHealth = (snack) => {
    const { fiber, protein, added_sugar } = snack;

    let result = null

    if ( fiber === null || protein === null || added_sugar === null) {
        return result
    } else if (isNaN(Number(fiber)) || isNaN(Number(protein)) || isNaN(Number(added_sugar))) {
        return result 
    } else if (fiber.length === 0 || protein.length === 0 || added_sugar.length === 0) {
        return result 
    } else {
        if (Number(fiber) >= 5 && Number(added_sugar) < 5) {
            //♥ Enough fiber
            result = true
        } else if (Number(protein) >= 5 && Number(added_sugar) < 5) {
            //♥ Enough protein
            result = true
        } else if ((Number(protein) >= 5 || Number(fiber) >= 5) && Number(added_sugar) < 5) {
            //♥ Enough fiber and protein
            result = true
        } else if (Number(fiber) >= 5 && Number(added_sugar) >= 5) {
            //♡ Enough fiber, too much sugar
            result = false
        } else if (Number(protein) >= 5 && Number(added_sugar) >= 5) {
            //♡ Enough protein, too much sugar
            result = false
        } else if ((Number(protein) < 5 && Number(fiber) < 5 && Number(added_sugar) >= 5)) {
            //♡ Enough protein and fiber, too much sugar
            result = false
        } else if ((Number(protein) < 5 && Number(fiber) < 5 && Number(added_sugar) < 5)) {
            //♡ Not enough protein nor fiber, nor too much sugar
            result = false
        }
        return result 
    }

};

module.exports = confirmHealth;
