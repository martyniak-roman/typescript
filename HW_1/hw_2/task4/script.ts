type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: [{
        name: string,
        age: number
    }]
}


const book:Book = {title:'Clean Code', pageCount: 330, genre:'Programming', authors: [{name: 'Robert Martin', age: 74}]}
const book1:Book = {title:'Clean Coder', pageCount: 330, genre:'Programming', authors: [{name: 'Robert Martin', age: 74}]}
const book2:Book = {title:'English is not easy', pageCount: 330, genre:'English', authors: [{name: 'Lucy Gutteridge', age: 49}]}
