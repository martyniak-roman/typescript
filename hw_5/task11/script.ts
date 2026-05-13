type CurrencyRate = {
    currency: string;
    value: number;
}

const exchange = (sumUAH: number, currencyValues: CurrencyRate[], exchangeCurrency: string): number | undefined => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(50000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))