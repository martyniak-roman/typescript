type Suit = 'spade' | 'diamond' | 'heart' | 'clubs';
type Value = '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';
type Color = 'red' | 'black';

type Card = {
    cardSuit: Suit;
    value: Value;
    color: Color;
};

type PackedDeck = {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
};

const suits:Suit[] = ['spade', 'diamond', 'heart', 'clubs'];
const values:Value[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const deck:Card[] = [];

for (const suit of suits) {
    for (const value of values) {
        const card: Card = {
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'
        };
        deck.push(card);
    }
}

//TODO: – знайти піковий туз

const spadeAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadeAce);

//TODO: – всі шістки

const allSixes = deck.filter(card => card.value === '6');
console.log(allSixes);

//TODO: – всі червоні карти

const redCards = deck.filter(card => card.color === 'red');
console.log(redCards);

//TODO: – всі буби

const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

//TODO: – всі трефи від 9 та більше

const clubsFromNine = deck.filter(card => {
    return card.cardSuit === 'clubs' &&
        card.value !== '6' &&
        card.value !== '7' &&
        card.value !== '8';
});
console.log(clubsFromNine);