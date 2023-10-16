const element = document.createElement("div");
document.body.append(element);

document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

newHeader.textContent = 'YOUR-NAME is the champion';

document.body.appendChild(newHeader);


