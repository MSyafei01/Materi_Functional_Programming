function max(arrayOfNumbers) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
    return [...arrayOfNumbers]
    .sort((a, b) => a - b)
    .pop();
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
    return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // Output: 
console.log(numbers); // Output: 

const person = {
    name: 'Baqi',
    username: 'Syabaqi',
};

const personWithEmail = registerEmail(person, 'BAQI@dicoding.com');

console.log(person); // Output: 
console.log(personWithEmail); // Output: 