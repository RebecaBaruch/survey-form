const radioOp: HTMLElement[] = document.querySelectorAll('.radioOp')! as any;
let submitBtn: HTMLInputElement = document.querySelector('.sbmAccount')! as HTMLInputElement;
//The getElementsByClassName method returns an array-like object (not an array).
const checkbox: HTMLCollection[] = document.querySelectorAll('.checkBox')! as any;
const textArea: HTMLTextAreaElement = document.getElementById('details-txt')! as HTMLTextAreaElement;

let radioValue = ' ';
let selected: number;
selected = 0;

//function for button abled to submit the form
function sbmAbled() {
    submitBtn.classList.remove('disabledBtn');
    submitBtn.classList.add('abled');
    submitBtn.disabled = false;
}

//function for button disabled to submit the form
function sbmDisabled() {
    submitBtn.classList.remove('abled');
    submitBtn.classList.add('disabledBtn');
    submitBtn.disabled = false;
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
const boxChecked = checkbox.forEach((input: any) => {
    input.addEventListener('click', () => {
        radioValue = input.value;
        console.log(radioValue);
        console.log(input.checked)
        
        if(input.checked) {
            selected++;
            if(selected >= 1) sbmAbled();
        }else {
            selected--;
            if(selected === 0) sbmDisabled();      
        }
    })
});

//--------------------------------------------------------------------------------------
//user data validation


// userName.addEventListener("keydown", () => {
//     let nameRegex: any = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
//     let nameResult: any = nameRegex.test(userName.value);

//     if(nameResult == true) {
//         console.log('It works!');
//     }
// });

// //user email validation
// email.addEventListener("keydown", () => {
//     let emailRegex: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     let emailResult: any = emailRegex.test(email.value);

//     if(emailResult == true) {
//         console.log('It works!');
//     }
// });

// //user age validation
// ['click', 'keydown'].forEach((event) => userAge.addEventListener(event, () => {
//     let ageRegex: any = /^[0-9]+\.?[0-9]*$/;
//     let ageResult: any = ageRegex.test(userAge.value);

//     if(ageResult == true) {
//         console.log('It works!');
//     }
// }));


//---------------------------------------------------------------------------------------------


//textarea validation
textArea.addEventListener("keydown", (e) => {
  let maxChars: number = 10;
  let minChars: number = 3;
  let inputLength: number = textArea.value.length;
  let charVer: number;

  //we gonna use this in a future moment for creating a counter
  charVer = maxChars - inputLength;
  //   console.log(inputLength);
  //   console.log(textArea.value);

  if(inputLength <= maxChars || textArea.value === '') sbmDisabled();

  if(inputLength >= minChars) sbmAbled();

  if(inputLength >= maxChars) {
    if(!(e.key === 'Backspace')) {
        e.preventDefault();
    }
  }

  console.log(charVer);
});