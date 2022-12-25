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
        console.log(radioValue);
        console.log(input.checked)
        
        if(input.checked == true) {
            radioValue = input.value;
            sbmAbled();
            console.log(submitBtn.classList);
        }
    })
});

//checkbox validation
//issues to fix: its not able to select the same checkbox after back history
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
    
                    console.log(storageSel);
                }

            }
            if(!input.checked) {
                selected--;
                if(selected == 0){
                    sbmDisabled(); 

                    storageSel = selected.toString();
                    localStorage.setItem('selected', storageSel);

                    console.log(storageSel)
                }      
            }
        });
    }
});

const backBtn: HTMLElement = document.querySelector('.backBtn') as any;
const skipBtn: HTMLElement = document.querySelector('.skipBtn') as any;

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