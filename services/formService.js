let indexItem = 1;

const createform = (content) => {
    const template = document.getElementById('form__item-template');
    const element = template.content.cloneNode(true).firstElementChild;
    const elementParagraph = element.getElementsByTagName('p')[0];
    elementParagraph.textContent = content;

    return element;
}


const addform = () => {
    const valueInput = document.getElementById('form-form').firstElementChild.value;
    if (!valueInput || !valueInput.trim() || valueInput.length > 25)
        return;

    const item = createform(valueInput);


    item.id = item.id + indexItem.toString();
    indexItem += 1;

    const buttonComplete = item.querySelector('.form__button-complete');
    const buttonDelete = item.querySelector('.form__button-delete');

    buttonComplete.addEventListener('click', () => {
        item.style.opacity = "0.2"
    });

    buttonDelete.addEventListener('click', () => {
        item.remove();
    })

    const formList = document.getElementById('form__list');
    formList.appendChild(item);
}

document.getElementById('form__button').addEventListener('click', () => {
    addform();
});
