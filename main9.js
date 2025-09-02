const truthyArray = [1, '', 'Halo', 0, null, 'Syabaqi', 14]
    .filter((item) => Boolean(item));

console.log(truthyArray); // Output: [ 1, 'Halo', 'Harry', 14 ]



const students = [
    {
    name: 'Baqi',
    score: 60,
    },
    {
    name: 'Syabaqi',
    score: 88,
    },
    {
    name: 'qi',
    score: 90,
    },
    {
    name: 'bayan',
    score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);

