const suits = ["S", "D", "C", "H"]
const face = ["J", "Q", "K"]

const num = ["A"]
for (var i = 2; i < 11; i++) {
    num.push(i)
}
num.push(...face)

var newDeck = suits.map(s => num.map(n => { return { suit: s, card: n } })).flat()

function shuffle(array) {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
}

const shuf = shuffle(newDeck)

console.log({ newDeck, shuf })
