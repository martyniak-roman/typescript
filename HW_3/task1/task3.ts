export interface IData {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

async function foobar<T> (url:string): Promise<T> {
        const response = await fetch(url)

        const data:T = await response.json()

    return data as T;
}

foobar<IData>('https://jsonplaceholder.typicode.com/users/1')
    .then(user => {
        console.log(user.username);
        console.log(user.company.name);
    })
    .catch(error => console.log(error));