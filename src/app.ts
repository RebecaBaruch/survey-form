//The getElementsByClassName method returns an array-like object (not an array).
const radioOp: HTMLElement[] = document.querySelectorAll('.radioOp')! as any;
let submitBtn: HTMLInputElement = document.querySelector('.sbmAccount')! as HTMLInputElement;
const checkbox: HTMLCollection[] = document.querySelectorAll('.checkBox')! as any;
const select: HTMLSelectElement = document.getElementById('exist-account')! as HTMLSelectElement;

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
            if(input.checked == true && select.value != "") {
                radioValue = input.value;
                sbmAbled();
                console.log(submitBtn.classList);
            }
            if(input.checked == true && select.value === "") sbmDisabled();
            if(input.checked == false && select.value!= "") sbmDisabled();
        });
});

//checkbox validation
const boxChecked = checkbox.forEach((input: any) => {
    let storageSel: string;
    if(!input.checked) {
        input.addEventListener('click', () => {
            if(input.checked) {
                selected++;
                if(selected >= 1 && select.value != "") {
                    sbmAbled();

                    storageSel = selected.toString();
                    localStorage.setItem('selected', storageSel);
                }
                if(selected == 0 && select.value === "") sbmDisabled();
            }
            if(!input.checked) {
                selected--;
                if(selected == 0){
                    sbmDisabled(); 

                    storageSel = selected.toString();
                    localStorage.setItem('selected', storageSel);
                }    
                if(selected == 0 && select.value === "") sbmDisabled();
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

//textarea validation
const textArea: HTMLTextAreaElement = document.getElementById('details-txt')! as HTMLTextAreaElement;
const counter: HTMLElement = document.getElementById("counter-alert")! as HTMLElement;

if(textArea){
    if(counter.textContent = '129/129') {
        counter.innerText = ``;
    } 
    
    textArea.addEventListener("input", (e) => {
      let maxChars: number = 130;
      let minChars: number = 3;
      let inputLength: number = textArea.value.length;
      let charVer: number;
    
      if(inputLength > 0 && inputLength <= maxChars) {
          
          if(inputLength > 0 && ((textArea.value != '') && (textArea.value!= null))) {
            charVer = maxChars - inputLength;
            counter.innerText = (`130/${charVer.toString()}`)!;
            counter.style.color = 'rgba(90, 90, 90, 0.441)';
            counter.style.borderTop = '4px solid rgb(243, 231, 10)';
          } 
          if(inputLength > 99){
            counter.style.color = '#ff6347';
            counter.style.borderTop = '4px solid #ff6347';
    
          }
          // console.log(charVer);
          console.log(inputLength);
          console.log(textArea.value);
      }
    
      if(inputLength < maxChars || textArea.value === '') sbmDisabled();
    
      if(inputLength >= minChars) sbmAbled();
    
      if(inputLength >= maxChars) {
            e.preventDefault();
      }
    });
    
    //funciton for clearing the text area
    textArea.addEventListener("keydown", (e) => {
      let inputLength: number = textArea.value.length;
      if((e.key === "Backspace" || e.key === "Delete") 
          && inputLength == 1 
          && counter.textContent == '130/129') 
      {
        counter.innerText = (`130/130`)!;
      }
    });
}
