function deepClone<T>(obj: T): T {
    if (obj === null || obj === undefined) {
        return obj;
    }

    if (typeof obj === 'number' && Number.isNaN(obj)) {
        return obj;
    }

    if (typeof obj === 'function') {
        return obj;
    }

    if (typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item)) as T;
    }

    const clone: Record<string, unknown> = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone((obj as Record<string, unknown>)[key]);
        }
    }

    return clone as T;
}

const user = {
    name: 'Roman',
    age: 25,
    status: undefined,
    wife: null,
    balance: NaN,
    skills: ['js', 'python'],
    address: {
        city: 'Lviv',
        zip: 79000
    },
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const copy = deepClone(user);

console.log(copy);
console.log(copy === user);
console.log(copy.address === user.address);
console.log(copy.skills === user.skills);
console.log(copy.balance);
console.log(copy.status);
console.log(copy.wife);

copy.greet();