// Creating a Login page with .createElement()
const form = document.querySelector('form');

const createInpElement = () => {
    const input = document.createElement('input');
    input.classList = 'input-field';
    console.log(input);

    const divElement = document.createElement('div');

    const div = form.appendChild(divElement)

    div.appendChild(input);
}

createInpElement();
createInpElement();


let placeholders = ["Email" , "Password"];

let elements = document.getElementsByClassName('input-field');
console.log(elements);

for(i=0 ; i < elements.length; i++) {
    elements[i].setAttribute('placeholder', placeholders[i]);
    elements[i].setAttribute('type', placeholders[i])

}
 const btn = document.createElement('button')
 btn.classList.add('btn');
 btn.textContent = "Submit";
 btn.setAttribute('type', 'submit');
 form.appendChild(btn);



const paragraph = document.createElement('p');
const bold = document.createElement('b');
const anchor = document.createElement('a');
anchor.setAttribute('href', './index.html');
anchor.textContent = 'Sign Up'
bold.appendChild(anchor);
console.log(bold);

paragraph.textContent = 'Not a member? ';
paragraph.appendChild(bold);
console.log(paragraph);
form.appendChild(paragraph);
console.log(form);






   
    
    


