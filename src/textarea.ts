//textarea validation
const textArea: HTMLTextAreaElement = document.getElementById('details-txt')! as HTMLTextAreaElement;
const counter: HTMLElement = document.getElementById("counter-alert")! as HTMLElement;

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