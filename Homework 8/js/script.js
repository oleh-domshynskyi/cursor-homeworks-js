class Student {
    constructor(university, course, fullName) {
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.isStudent = true;
        this.allMarks = [5, 4, 4, 5];
    }
    getInfo() {
        return `Студент ${this.course} курсу, ${this.university},  ${this.fullName}.`;
    }
    get marks() {
        return this.isStudent ? this.allMarks : null;
    }
    set marks(number) {
        return this.isStudent ? this.marks.push(number) : null;
    }
    getAverageMark() {
        if (this.isStudent) {
            return (this.allMarks.reduce((a, b) => a + b) / this.marks.length);
        }
    }
    dismiss() {
        return this.student = false;
    }
    recover() {
        return this.student = true;
    }
}
let student = new Student("Вищої Школи Психотерапії м.Одеса", '1-го', "Остап Бендер");

console.log(student.getInfo());
console.log(student.marks);
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
console.log(student.dismiss());
console.log(student.marks);
console.log(student.recover());
console.log(student.marks);