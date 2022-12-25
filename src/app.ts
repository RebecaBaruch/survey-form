//The getElementsByClassName method returns an array-like object (not an array).
const radioOp: HTMLElement[] = document.querySelectorAll('.radioOp')! as any;
let submitBtn: HTMLInputElement = document.querySelector('.sbmAccount')! as HTMLInputElement;
const checkbox: HTMLCollection[] = document.querySelectorAll('.checkBox')! as any;

let radioValue = ' ';
let selected: number;
selected = 0;

//function for button abled to submit the form
const sbmAbled = () => {
    submitBtn.classList.remove('disabledBtn');
    submitBtn.classList.add('abled');
    submitBtn.disabled = false;
}

//function for button disabled to submit the form
const sbmDisabled = () => {
    submitBtn.classList.remove('abled');
    submitBtn.classList.add('disabledBtn');
    submitBtn.disabled = true;
}

//radio button validation
const radioChecked = radioOp.forEach((input: any) => {
    input.addEventListener('click', () => {
        radioValue = input.value;
            
        if(input.checked == true) {
            radioValue = input.value;
            sbmAbled();
            console.log(submitBtn.classList);
        }
    })
});

//checkbox validation
const boxChecked = checkbox.forEach((input: any) => {
    let storageSel: string;
    if(!input.checked) {
        input.addEventListener('click', () => {
            if(input.checked) {
                selected++;
                if(selected >= 1) {
                    sbmAbled();

                    storageSel = selected.toString();
                    localStorage.setItem('selected', storageSel);
                }

            }
            if(!input.checked) {
                selected--;
                if(selected == 0){
                    sbmDisabled(); 

                    storageSel = selected.toString();
                    localStorage.setItem('selected', storageSel);
                }      
            }
        });
    }
});

//navigation functions
const backBtn: HTMLButtonElement = document.querySelector('.backBtn') as HTMLButtonElement;
const skipBtn: HTMLButtonElement = document.querySelector('.skipBtn') as HTMLButtonElement;

const navigation: any = [
    '/public/index.html',
    '/src/pages/Start/start.html',
    '/src/pages/form01/form01.html',
    '/src/pages/form02/form02.html',
    '/src/pages/form03/form03.html',
    '/src/pages/form04/form04.html',
    'src/pages/success/success.html'
];

if(backBtn){
    backBtn.addEventListener('click', () => {
        const backlURL = () => {
            navigation.forEach((item: any, index: any) => {
                if(window.location.pathname === item){
                    window.location.pathname = navigation[index-1];
                }
            });
        }
        backlURL();
    });
}

if(skipBtn){
    skipBtn.addEventListener('click', () => {
        const nextURL = () => {
            navigation.forEach((item: any, index: any) => {
                if(window.location.pathname === item){
                    window.location.pathname = navigation[index+1];
                }
            });
        }
        nextURL();
    });
}

//Success page
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