////////HELPER FUNCTIONS/////////

const confirmHealth = require("../confirmHealth")

const setValues = (snack) => {
    if (!snack.image) {
        snack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    }
    
    if (snack.name.length > 2) {
        const list = snack.name.split(" ");
        snack.name = list.forEach((word) => {
            if (word.length > 2) {
                word = word[0].toUpperCase() + word.substring(1).toLowerCase()
            }
        }).join(" ")
    }

    snack.is_healthy = confirmHealth(snack)

    return snack
};
  
const isValid = (snack) => {
    if (
      typeof snack.name === "string" &&
      typeof snack.image === "string" &&
      !isNaN(Number(snack.fiber)) &&
      !isNaN(Number(snack.protein)) &&
      !isNaN(Number(snack.added_sugar))
    ) {
      return true;
    }
    return false;
};

  
module.exports = {
    setValues,
    isValid
};
  