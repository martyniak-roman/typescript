class Product {
    constructor(
        public title: string,
        public price: number
    ) {}
}

class Client {
    constructor(
        public id: number,
        private user: string,
        private client: string,
        private email: string,
        private phone: string,
        public order: Product[]
    ) {}
}

const clients = [
    new Client(
        1,
        "asd",
        "qwe",
        "asd@asd.com",
        "+39764645",
        [new Product("tv", 13000), new Product("phone", 987654)]
    ),
    new Client(
        2,
        "bbb",
        "ccc",
        "bbb@ccc.com",
        "+39764645",
        [new Product("laptop", 25000)]
    ),
];

clients.forEach((client, i) => {
    console.log("Client", i, "order:", client.order);
});

const sortedClients = clients.sort(((a, b) => a.order.length - b.order.length));

console.log(sortedClients)