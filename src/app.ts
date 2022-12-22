const backButton: HTMLButtonElement = document.getElementById('backBtn')! as HTMLButtonElement;
const startBtn:HTMLButtonElement = document.getElementById('formStart')! as HTMLButtonElement;

backButton.addEventListener('click', window.history.back());