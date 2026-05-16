const form = document.getElementById('userForm')
const resultDiv = document.getElementById("result");
const arr = []


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const form = document.forms['f1'];
    const nameValue = form.name.value;
    const surnameValue = form.surname.value;
    const ageValue = form.age.value;

    const user = {
        name: nameValue,
        surname: surnameValue,
        age: ageValue
    };

    console.log(user);

    const userBlock = document.createElement('div');
    userBlock.innerText = `User: ${user.name} Surname: ${user.surname}, Age: ${user.age}`;

    resultDiv.appendChild(userBlock);

    form.reset()
})