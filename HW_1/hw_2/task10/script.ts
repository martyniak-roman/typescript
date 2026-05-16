type User = {
    name: string;
    username: string;
    password: string;
}

const users:User[] = [
    {
        name: 'Sasha',
        username: 'olex_dev',
        password: 'password123',
    },
    {
        name: 'Mary',
        username: 'mary_p',
        password: 'qwerty2024',
    },
    {
        name: 'Andriy',
        username: 'andrii_sheva',
        password: 'mysecretpass',
    },
    {
        name: 'Olena',
        username: 'bondar_elena',
        password: 'admin777',
    },
    {
        name: 'Dima',
        username: 'dimon_frost',
        password: 'superpassword',
    },
    {
        name: 'Svitlana',
        username: 'sveta_kuz',
        password: 'secure_pass1',
    },
    {
        name: 'Igor',
        username: 'tkach_it',
        password: 'login99',
    },
    {
        name: 'Viktoriya',
        username: 'vicky_fox',
        password: 'fox_password',
    },
    {
        name: 'Artem',
        username: 'art_m_24',
        password: 'user_12345',
    },
    {
        name: 'Jylia',
        username: 'july_krav',
        password: 'topsecret99',
    },
]

for (const user of users) {
    console.log(user.password);
}