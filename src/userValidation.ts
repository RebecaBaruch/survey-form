class UserInput {
    submBtn: HTMLElement;
    userName: HTMLInputElement;
    email: HTMLInputElement;
    age: HTMLInputElement;

    nameRegex: any;
    emailRegex: any;
    ageRegex: any;

    constructor() {
            this.submBtn = document.getElementById("submUser")! as HTMLElement;

            this.userName = document.getElementById("fullName")! as HTMLInputElement;
            this.email = document.getElementById("email")! as HTMLInputElement;
            this.age = document.getElementById("age")! as HTMLInputElement;

            this.nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
            this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.ageRegex = /^[0-9]+\.?[0-9]*$/;

            this.configure()
    }

    private configure() {
        this.submBtn.addEventListener("click", this.submitHandler.bind(this));
    }

    private submitHandler = (e: Event) => {
        e.preventDefault();

        const userName = this.userName.value;
        const email = this.email.value;
        const age = this.age.value;
        
        let nameRegex = this.nameRegex; 
        let nameResult: any = nameRegex.test(userName);

        let emailRegex = this.emailRegex;
        let emailResult = emailRegex.test(email);

        let ageRegex = this.nameRegex;
        let ageResult: any = ageRegex.test(age);

        if(nameResult == true && emailResult == true && ageResult == true) {
            console.log('It works!');
            const user = {
                userName: userName,
                email: email,
                age: age
            }

            console.log(user);
            localStorage.setItem('user', user.userName);
            localStorage.setItem('email', user.email);
            localStorage.setItem('age', user.age);

            this.clearInputs();
            this.navigateTo('/src/pages/success/success.html');
            
        }else{ 
            console.log('It doesn\'t work!');
            this.clearInputs();
            this.disableBtn();
        }
    }

    private clearInputs() {
        this.userName.value = "";
        this.email.value = "";
        this.age.value = "";
    }

    private navigateTo(url: string) {
        window.location.pathname = url;
    }

    private disableBtn() {
        const btn = this.submBtn;
        btn.classList.add('disabledSubm');
        setTimeout(() => btn.classList.remove('disabledSubm'), 2000);

        const userName = this.userName;
        const email = this.email;
        const age = this.age;

        let nameRegex = this.nameRegex; 
        let nameResult: any = nameRegex.test(userName);

        let emailRegex = this.emailRegex;
        let emailResult = emailRegex.test(email);

        let ageRegex = this.nameRegex;
        let ageResult: any = ageRegex.test(age);

        function inputError(input: any){
            input.setAttribute('style', 'border: 1px solid #ff6347; transition: all 0.5s ease-out;');

            setTimeout(() => input.removeAttribute('style', 'border: 1px solid #ff6347;'), 1000);
        }

        if(nameResult == false) inputError(userName);
        
        if(emailResult == false) inputError(email);
      
        if(ageResult == false) inputError(age);

    }   
}

const userInput = new UserInput();
