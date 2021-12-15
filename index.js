const suits = ["S", "D", "C", "H"]
const face = ["J", "Q", "K"]

const num = []
for (var i = 1; i < 14; i++) {
    num.push(i)
}

var newDeck = suits.map(s => num.map(n => { return { suit: s, card: n } })).flat()

const shuffle = ([...array]) => {
    var m = array.length, t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array
}

const reduceSuits = (n,a) => {
    n[a.suit] = (n[a.suit] ?? 0) + 1 
    return n
}

const reduceCards = (n,a) => {
    n[a.card] = (n[a.card] ?? 0) + 1 
    return n
}

const deal = (deck,handCount) => {
    //const shuff = shuffle(deck)
    const shuff = deck
    var hands = []
    for(var i = 0;i<handCount;i++){
        hands.push([shuff[i],shuff[i+handCount],...shuff.filter((s,c) => c>=2*handCount&&c<2*handCount+5)])
    }
    return hands
}

const evalHand = (hand) => {
    const suitCount = hand.reduce(reduceSuits,{})
    const cardCount = hand.reduce(reduceCards,{})
    const cards = hand.map(c => c.card)
    const Flushsuits = Object.entries(suitCount).filter(s => s[1]>4)
    
    const isStraight = cards.map(c => cards.includes(c+1)
        && cards.includes(c+2) 
        && cards.includes(c+3)
        && cards.includes(c+4)).some(a => a)
    console.log(Flushsuits)
    console.log(hand)
    return {score:0,hand}
}

const hands = deal(newDeck,1)
const score = hands.map(evalHand)

console.log(score)