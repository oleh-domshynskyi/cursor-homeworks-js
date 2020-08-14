const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1
function getPairs() {
    const boys = [];
    const girls = [];
    const pairs = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i] === 'Олександр' || students[i] === 'Ігор' || students[i] === 'Олексій') {
            boys.push(students[i]);
        } else {
            girls.push(students[i]);
        }
    }
    for (let i = 0; i < 3; i++) {
      pairs.push([`${boys[i]}`, `${girls[i]}`]);
    }

    return pairs;
}
const pairs = getPairs(students);
console.log(pairs);

//2
function pairsWithThemes(pairs, themes) {
    const pairsAndThemes = [];
    for (let i = 0; i < 3; i++) {
      pairsAndThemes.push([`${pairs[i]}`, `${themes[i]}`]);
    }
    return pairsAndThemes;
  }
  const pairsAndThemes = pairsWithThemes(pairs, themes);
  console.log(pairsAndThemes);

  //3
  function marksForStudents(students, marks) {
    const studentsMarks = [];
    for(let i =0; i < students.length; i++){
      studentsMarks.push([`${students[i]}`, `${marks[i]}`]);
    }
    return studentsMarks;
      
  }
  const studentsMarks = marksForStudents(students, marks);
  console.log(studentsMarks);

  //4
  function randomMarkForProject(pairsAndThemes) {
      const studentsWithRandomMarks = [];
    for(let i =0; i < pairsAndThemes.length; i++){
        studentsWithRandomMarks.push([`${pairsAndThemes[i]}`, `${Math.ceil(Math.random()*5)}`]);
    }
    return studentsWithRandomMarks;
  }
  const allStudentsWithRandomMarks = randomMarkForProject(pairsAndThemes);
  console.log(allStudentsWithRandomMarks);