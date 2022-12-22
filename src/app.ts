const radioOp: HTMLElement[] = document.querySelectorAll('.radioOp')! as any;
let submitBtn: HTMLInputElement = document.querySelector('.sbmAccount')! as HTMLInputElement;
//The getElementsByClassName method returns an array-like object (not an array).
const checkbox: HTMLCollection[] = document.querySelectorAll('.checkBox')! as any;

const textArea: HTMLTextAreaElement = document.getElementById('details-txt')! as HTMLTextAreaElement;


let radioValue = ' ';
let selected: number;
selected = 0;


//radio button validation
const radioChecked = radioOp.forEach((input: any) => {
    input.addEventListener('click', () => {
        radioValue = input.value;
        console.log(radioValue);
        console.log(input.checked)
        
        if(input.checked == true) {
            radioValue = input.value;
            submitBtn.classList.remove('disabledBtn');
            submitBtn.classList.add('abled');
            submitBtn.disabled = false;
    
            console.log(submitBtn.classList);
        }
    })
});

//checkbox validation
const boxChecked = checkbox.forEach((input: any) => {
    input.addEventListener('click', () => {
        radioValue = input.value;
        console.log(radioValue);
        console.log(input.checked)
        
        if(input.checked) {
            selected++;
            if(selected >= 1) {
                submitBtn.classList.remove('disabledBtn');
                submitBtn.classList.add('abled');
                submitBtn.disabled = true;
            } 
        }else {
            selected--;
            if(selected === 0) {
                submitBtn.classList.remove('abled');
                submitBtn.classList.add('disabledBtn');
                submitBtn.disabled = false;

            }            
        }
    })
});

//textarea validation
textArea.addEventListener("keydown", (e) => {
  let maxChars: number = 10;
  let minChars: number = 3;
  let inputLength = textArea.value.length;
  
  console.log(inputLength);
  console.log(textArea.value);

  if(inputLength <= maxChars || textArea.value === '') {
    submitBtn.classList.remove('add');
    submitBtn.classList.add('disabledBtn');
    submitBtn.disabled = true;
  }

  if(inputLength >= minChars) {
    submitBtn.classList.remove('disabledBtn');
    submitBtn.classList.add('abled');
    submitBtn.disabled = false;
  }

  if(inputLength >= maxChars) {
    if(!(e.key === 'Backspace')) {
        e.preventDefault();
    }
  }
});