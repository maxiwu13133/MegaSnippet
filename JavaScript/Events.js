const confirm = document.getElementById('submit');
const addEvent = document.getElementById('addEvent');
const cancel = document.getElementById('cancel');
const body = document.querySelector('body')
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", 'Aug', "Sep", 'Oct', 'Nov', 'Dec']
let counter = 0

confirm.addEventListener('click', function(event){
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let color = document.getElementById('color').value;
    if(name && date){
        document.getElementById('name').value = "";
        document.getElementById('date').value = "";
        document.getElementById('color').value = "#000000";

        let days = date.split('T')[0];
        let time = date.split('T')[1];
        let year = days.split('-')[0];
        let month = days.split('-')[1];
        let day = days.split('-')[2];

        let header = document.createElement('h1');
        let headerText = document.createTextNode(name);
        header.appendChild(headerText);
        header.setAttribute('class', 'reminderName');

        let p = document.createElement('p');
        let pText = document.createTextNode(`Happening on: ${months[month-1]} ${day}, ${year} at ${time}`);
        p.appendChild(pText);
        p.setAttribute('class', 'reminderTime');

        let button = document.createElement('button');
        let buttonText = document.createTextNode('X');
        button.appendChild(buttonText);
        button.setAttribute('class', 'delete');
        button.setAttribute('id', counter);
        button.style.backgroundColor = color;

        let br = document.createElement('br')

        let div = document.createElement('div');
        div.appendChild(header);
        div.appendChild(button);
        div.appendChild(br);
        div.appendChild(p);
        div.setAttribute('id', "reminder" + counter);
        div.setAttribute('class', 'reminder')
        div.style.backgroundColor = color;

        body.appendChild(div);

        document.getElementById('overlay').style.display = 'none';

        document.getElementById(counter).addEventListener('click', function(event){
            document.getElementById('reminder' + this.id).remove();
        })
        counter++;
    }
})

addEvent.addEventListener('click', function(event){
    document.getElementById('overlay').style.display = 'block';
})

cancel.addEventListener('click', function(event){
    document.getElementById('overlay').style.display = 'none';
})
