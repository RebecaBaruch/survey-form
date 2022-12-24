//textarea validation
const textArea: HTMLTextAreaElement = document.getElementById('details-txt')! as HTMLTextAreaElement;
const counter: HTMLElement = document.getElementById("counter-alert")! as HTMLElement;


counter.innerText = ('130');

textArea.addEventListener("input", (e) => {
  let maxChars: number = 130;
  let minChars: number = 3;
  let inputLength: number = textArea.value.length;
  let charVer: number;

  if(inputLength > 0 && inputLength <= maxChars) {
      
      if(inputLength > 0 && ((textArea.value != '') && (textArea.value!= null))) {
        charVer = maxChars - inputLength;
        counter.innerText = (charVer.toString())!;
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
  let maxChars: number = 130;
  let inputLength: number = textArea.value.length;
  if((e.key === "Backspace" || e.key === "Delete") 
      && inputLength == 1 
      && counter.textContent == '129') 
  {
    counter.innerText = (maxChars.toString())!;
  }
});