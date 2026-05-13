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

const suits: Suit[] = ['spade', 'diamond', 'heart', 'clubs'];
const values: Value[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
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

const packedDeck: PackedDeck = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }

    return accumulator;
}, {
    spades: [] as Card[],
    diamonds: [] as Card[],
    hearts: [] as Card[],
    clubs: [] as Card[]
});

console.log(packedDeck);