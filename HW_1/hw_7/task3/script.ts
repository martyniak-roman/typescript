class User{
    constructor(public id: number, private name: string, public email: string, private surname: string, private phone: string) {
    }
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

const sortedUsers = users.sort(((a, b) => a.id - b.id));

console.log(sortedUsers)