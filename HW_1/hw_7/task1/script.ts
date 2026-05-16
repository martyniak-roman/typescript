const arr = []


class User{

    constructor(private id: number, private name: string, private email: string,private surname: string, private phone: string, ) {}

}
const users = [
    new User(1, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(2, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(3, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(4, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(5, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(6, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(7, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(8, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(9, "John", "john_dee@gmail.com", "Dee", "09845678"),
    new User(10, "John", "john_dee@gmail.com", "Dee", "09845678"),
]

arr.push(users);

console.log(users);