class UserInput {
    submBtn: HTMLElement;
    userName: HTMLInputElement;
    email: HTMLInputElement;
    age: HTMLInputElement;

    /*nameRegex: any;
    emailRegex: any;
    ageRegex: any;*/

    constructor() {
            this.submBtn = document.getElementById("submUser")! as HTMLElement;

            this.userName = document.getElementById("fullName")! as HTMLInputElement;
            this.email = document.getElementById("email")! as HTMLInputElement;
            this.age = document.getElementById("age")! as HTMLInputElement;

            /*this.nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
            this.emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            this.ageRegex = /^[0-9]+\.?[0-9]*$/;*/

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
        
        let nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/; 
        let nameResult: any = nameRegex.test(userName);

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let emailResult: any = emailRegex.test(email);

        let ageRegex =  /^[0-9]+\.?[0-9]*$/;
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
            if(nameResult == false) this.inputError(this.userName);
            if(emailResult == false) this.inputError(this.email);
            if(ageResult == false) this.inputError(this.age);

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

        /*function inputError(input: any){
            input.setAttribute('style', 'border: 1px solid #ff6347; transition: all 0.5s ease-out;');

            setTimeout(() => input.removeAttribute('style', 'border: 1px solid #ff6347;'), 1000);
        }

        if(nameResult == false) inputError(userName);
        
        if(emailResult == false) inputError(email);
      
        if(ageResult == false) inputError(age);

        console.log(nameResult, emailResult, ageResult);
        console.log(userName, email, age);
        console*/
    }   

    private inputError(input: any) {
        input.setAttribute('style', 'border: 2px solid #ff6347; transition: all 0.5s ease-out;');
        setTimeout(() => input.removeAttribute('style', 'border: 2px solid #ff6347;'), 1000);
    }
}

const userInput = new UserInput();