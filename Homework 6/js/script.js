const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1
const getSubjects = (studentsNumber) => {
    let subjects = Object.keys(students[studentsNumber].subjects);
    return `${subjects.map(element => element[0].toUpperCase() + element.slice(1).toLowerCase().replace('_', ' '))}`;
}

console.log(getSubjects(0));

//2
const getAverageMark = (studentNumber) => {
    let marks = (Object.values(students[studentNumber].subjects).flat());
    let averageMark = (marks.reduce((a, b) => (a + b)) / marks.length).toFixed(2);
    return averageMark;
}
console.log(getAverageMark(0));

//3
const getStudentInfo = (studentNumber) => {
    return `name: ${students[studentNumber].name}, course: ${students[studentNumber].course}, Average Mark: ${getAverageMark(studentNumber)}`;
}
console.log(getStudentInfo(0));

//4
const getStudentsNames = (students) => {
    let allStudents = students.map(student => student.name);
    return allStudents.sort();
};
console.log(getStudentsNames(students));

//5
const getBestStudent = (students) => {
    let averageMarks = [];
    for (i = 0; i < students.length; i++) {
        averageMarks.push(+getAverageMark(i));
    }
    let bestStudent = students[averageMarks.indexOf(Math.max(...averageMarks))].name;
    return bestStudent;

}
console.log(getBestStudent(students));

//6
const calculateWordLetters = (word) => {
    let objectOfLetter = {};
    let wordToLowerLetter = word.toLowerCase();
    let letterArr = word.split(``);
    for (letter of letterArr) {
        if (objectOfLetter[letter]) {
            objectOfLetter[letter]++
        } else {
            objectOfLetter[letter] = 1
        }
    }
    return objectOfLetter;
}
console.log(calculateWordLetters(`тест`));