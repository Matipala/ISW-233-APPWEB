let indexItem = 1;

const createtodo = (content) => {
    const template = document.getElementById('todo__item-template');
    const element = template.content.cloneNode(true).firstElementChild;
    const elementParagraph = element.getElementsByTagName('p')[0];
    elementParagraph.textContent = content;

    return element;
}


const addtodo = () => {
    const valueInput = document.getElementById('todo-todo').firstElementChild.value;
    if (!valueInput || !valueInput.trim() || valueInput.length > 25)
        return;

    const item = createtodo(valueInput);


    item.id = item.id + indexItem.toString();
    indexItem += 1;

    const buttonComplete = item.querySelector('.todo__button-complete');
    const buttonDelete = item.querySelector('.todo__button-delete');

    buttonComplete.addEventListener('click', () => {
        item.style.opacity = "0.2"
    });

    buttonDelete.addEventListener('click', () => {
        item.remove();
    })

    const todoList = document.getElementById('todo__list');
    todoList.appendChild(item);
}

document.getElementById('todo__button').addEventListener('click', () => {
    addtodo();
});
