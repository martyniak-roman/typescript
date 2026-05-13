type User = {
    id: number,
    name: string,
    age: number;
};

const create_array = (array: User[]) => {
    for (const user of array) {
        document.write(`
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Age: ${user.age}</li>
            </ul>
        `);
    }
}

create_array([
    { id: 1, name: "Andriy", age: 18 },
    { id: 2, name: "Max", age: 25 }
]);