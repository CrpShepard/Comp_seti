console.log("Задание №1")

class User1{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    getName(){
        return `Name: ${this.name}  Email: ${this.email}`
    }
}

function createUser(name, email){
    const newUser = new User1("Ivan", "11")
    console.log(newUser.getName())
}

createUser()

console.log("Задание №2")

class User2{
    constructor(id, type){
        this.id = id
        this.type = type
    }

    getId(){
        return `#${this.id}`
    }

    isAdmin(){
        if(this.type == "Admin"){
            return true
        }
        else{
            return false
        }
    }
}

const newUser2 = new User2(100, "Admin")
console.log(newUser2.getId())
console.log(newUser2.isAdmin())

console.log("Задание №3")

class AreaOfCircle{
    set rad(value){
        this._rad = Number.parseInt(value, 10)
    }

    get rad(){
        let r = this._rad
        return 3.14 * r * r
    }
}

const area = new AreaOfCircle()
area.rad = 2
console.log(area.rad)

console.log("Задание №4")

class Course{
    constructor(mark){
        this.mark = mark
    }

    getGrade(){
        if (this.mark == 4 || this.mark == 5){
            return true
        }
        else{
            return false
        }
    }

    getCertificate(){
        if (this.getGrade() == true){
            return "Выдать сертификат"
        }
        else{
            return "Курс не пройден"
        }
    }
}

const course = new Course(4)

console.log(course.getCertificate())