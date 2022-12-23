//textarea validation
const textArea: HTMLTextAreaElement = document.getElementById('details-txt')! as HTMLTextAreaElement;
const counter: HTMLElement = document.getElementById("counter-alert")! as HTMLElement;

textArea.addEventListener("keydown", (e) => {
  let maxChars: number = 130;
  let minChars: number = 3;
  let inputLength: number = textArea.value.length;
  let charVer: number;

  charVer = maxChars - inputLength + 1;

  if(inputLength > 0 && inputLength < maxChars) {
    //   counter.classList.remove('disableAlert');
    //   counter.classList.add('ableAlert');

      console.log(counter.classList);
      if(!(e.key === 'Backspace')) {
        counter.innerHTML = (charVer.toString())!;
      }
      if(e.key === 'Backspace' && charVer < maxChars) {
        charVer++;
        counter.innerHTML = (charVer.toString())!;
      }
  }

  if(inputLength < maxChars || textArea.value === '') sbmDisabled();

  if(inputLength >= minChars) sbmAbled();

  if(inputLength >= maxChars) {
    if(!(e.key === 'Backspace')) {
        e.preventDefault();
    }
  }

  console.log(charVer);
});

