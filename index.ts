// student management system

class School{
    name: string;

    students: Student[] = [];
    teachers: Teacher[] = [];

    addStudent(stdObject: Student){
        this.students.push(stdObject)
    }

    addTeacher(tecObject: Teacher){
        this.teachers.push(tecObject)
    }

    constructor(name: string){
        this.name = name;
    }
    
}

class Student {
    name: string;
    age: number;
    schoolName: string;

    constructor(name: string,age: number,schoolName: string) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}


class Teacher extends Student{}   //class inherited

let school1 = new School("Oxford Public")
let school2 = new School("Model Grammer")

let s1 = new Student("iqra",23,school1.name)
let t2 = new Teacher("maham",18,school1.name)
let t1 = new Teacher("urooj",22,school2.name)
let s2 = new Student("areeba",18,school2.name)
let s3 = new Student("hadia",28,school1.name)
let s4 = new Student("ayesha",24,school2.name)
let t3 = new Teacher("qandil",26,school2.name)
let t4 = new Teacher("rubab",26,school1.name)

// add students

school1.addStudent(s1)
school2.addStudent(s2)
school1.addStudent(s3)
school2.addStudent(s4)

//add teachers

school1.addTeacher(t2)
school2.addTeacher(t1)
school2.addTeacher(t3)
school1.addTeacher(t4)

console.log(school1);
console.log(school2);
