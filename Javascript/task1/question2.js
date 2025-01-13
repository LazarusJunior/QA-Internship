//Write a function in JavaScript to check if a given password contains repetitive numbers
function hasRepetitiveNumbers(password) {
    const removeLetters = password.replace(/\D/g, "");
    for (let i = 0; i < removeLetters.length - 2; i++) {
        if (removeLetters[i] === removeLetters[i + 1] && removeLetters[i] === removeLetters[i + 2]) {
            return true;
        }
    }
    return false;
}
console.log(hasRepetitiveNumbers("pass123111word")); 
console.log(hasRepetitiveNumbers("secure456passsword")); 
