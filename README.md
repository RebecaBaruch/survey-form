# Survey_Form
A project from the compass uol trainee program. This was our first chalenge, within some specifications.
![readme me-header](https://user-images.githubusercontent.com/71520936/209555596-9b9afb62-eed8-4e3f-bc3c-6ae088ae3172.svg)

### 🔑 Mandatory requirements
<ul> 
    <li>Using HTML, CSS, Java Script</li>
    <li>Layout according to Figma (Pixel Perfect)</li>
    <li>Responsive Layout</li>
</ul>

### 🔑  Additional Functionality (NOT MANDATORY)
<ul> 
    <li>Validation of inputs with Java Script.</li>
    <li>User data stored in localStorage.</li>
    <li>Indication of the number of characters remaining in the TextArea.</li>
    <li>Use of TypeScript.</li>
    <li>Creation of a success screen, signaling that the registration was completed successfully.</li>
</ul>

### <img align="center" alt="FIGMA" height="25" src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg">FIGMA LINK:
<a>https://www.figma.com/file/lb8YnlygMTI3RiAY8KKDCB/survey-form---desktop-type-(Community)?node-id=0%3A1</a>

## Development setup
Git clone.
```
git clone https://github.com/RebecaBaruch/Survey_Form.git
```
Install all development dependencies and how to run.
```sh
npm install
npm install typescript
npm start
```
For compiling the TypeScript.
```
tsc
tsc -w
````
You can see the running application by live server on VSCode.

## Features
#### Radio Button + select validation
![radio-button-validation](https://user-images.githubusercontent.com/71520936/209553123-a71b2122-90dd-4d67-8dda-72157fe1e663.gif)

### Checkbox + select validation
![checkbox-validation](https://user-images.githubusercontent.com/71520936/209553391-96007659-c1b8-49b1-a820-0b9a46a54c93.gif)

### TextArea validation
![textarea-validation](https://user-images.githubusercontent.com/71520936/209553433-a977e48f-49ac-41e1-ac5d-49e3525d0c3a.gif)

### User Validation
![user-validation](https://user-images.githubusercontent.com/71520936/209553467-67d833fb-32a6-4c74-98de-faf40bce3f30.gif)

This functionality was the one wich most got me pround. I used two classes for making this functionality: UserInput, for getting input values and catch errors on validation and userOutput to the success page. 
For validation, regex:
```
        let nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/; 
        let nameResult: any = nameRegex.test(userName);

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let emailResult: any = emailRegex.test(email);

        let ageRegex =  /^[0-9]+\.?[0-9]*$/;
        let ageResult: any = ageRegex.test(age);
```

## Issues
#### Select validation
My function to validate the 'Next' button verifying if the select value is null only works if you click on a radio button.
![radio-button-issue](https://user-images.githubusercontent.com/71520936/209554162-60521ea6-2aea-4596-89eb-1e862eeeb630.gif)

The same to checkbox:
![checkbox-issue](https://user-images.githubusercontent.com/71520936/209554465-d7ac2a28-fdc0-465c-80ce-dc1500bdc489.gif)

I need to fix this in the future.

## :rocket: Technologies
<ul> 
    <li>HTML3</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>TypeScript.</li>
</ul>
