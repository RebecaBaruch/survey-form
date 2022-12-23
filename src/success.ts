class userOutput {
    userOutput: HTMLElement;
    emailOutput: HTMLElement;
    ageOutput: HTMLElement;

    inputName: string;
    inputEmail: string;
    inputAge: string;

    constructor() {
        this.userOutput = document.getElementById('userOutput')! as any;
        this.emailOutput = document.getElementById('emailOutput')! as HTMLElement;
        this.ageOutput = document.getElementById('ageOutput')! as HTMLElement;

        this.inputName = localStorage.getItem('user')!;
        this.inputEmail = localStorage.getItem('email')!;
        this.inputAge = localStorage.getItem('age')!;

        this.configure()
    }

    private configure() {
        this.userOutput.innerText = this.inputName;
        this.emailOutput.innerText = this.inputEmail;
        this.ageOutput.innerText = this.inputAge;
    }
}

const userOutputElement = new userOutput();