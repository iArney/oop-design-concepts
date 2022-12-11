class Role {
    constructor(userName, email) {
        this.userName = userName
        this.email = email
    }

    uploadVideo() {
        console.log(`Hey ${this.userName}!, upload some new videos`)
    }

    viewVideo() {
        console.log(`Hey ${this.userName}!, new videos release here`)
    }

    static loggedIn() {
        console.log('This user is logged in')
    }
}

const tutor = new Role('MrLivinus', 'example@mail.com')
tutor.uploadVideo()
Role.loggedIn()

console.log('\n\n')

const student = new Role('Arnold', 'iarnold@gmail.com')
student.viewVideo()
Role.loggedIn()