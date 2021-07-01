const randomOne = function() {
        return Math.floor(Math.random() * 76);
        let randomResult = function() {
            if randomOne === 1 {
               let applyClass = document.querySelector("container")[0];
               applyClass.className = "selected";

               }
            }
        }
}

const randomTwo = function() {
    return Math.floor(Math.random() * 24);
}

const bingo = function() {
    if randomOne === randomTwo {
        alert("Bingo!");
    }
}