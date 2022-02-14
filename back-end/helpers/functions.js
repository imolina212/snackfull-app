////////HELPER FUNCTIONS/////////

const confirmHealth = require("../confirmHealth")

const setValues = (snack) => {
    if (!snack.image) {
        snack.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    }

    if (snack.name?.length > 2) {
        const list = snack.name.split(" ");
        snack.name = list.map((word) => {
            if (word.length > 2) {
                word = word[0].toUpperCase() + word.substring(1).toLowerCase()
            }
            return word
        }).join(" ")
    }

    snack.is_healthy = confirmHealth(snack)

    return snack
};

  
module.exports = {
    setValues,
};
  