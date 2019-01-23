

let buttons = document.querySelectorAll('.editButton');

for (let button of buttons) {
    button.addEventListener('click', editMenu);
}

let editingTr;
let editingTrHTML;
function editMenu(e) {
    if (this.innerText !== 'Zapisz' && this.innerText !== 'Usuń') {
        e.preventDefault();
    }
    if (this.innerText == 'Usuń') {
        return;
    }
    if (this.innerText == 'Edytuj' && editingTr) {
        editingTr.innerHTML = editingTrHTML;
    }

    let tr = this.parentElement.parentElement;
    editingTr = tr;
    editingTrHTML = tr.innerHTML;

    tr.children[1].innerHTML = `<input name="name" type="text" value="${tr.children[1].innerHTML}">`;
    tr.children[2].innerHTML = '<input name="price" type="text">';
    tr.children[3].children[0].innerText = "Zapisz";
    tr.children[4].innerHTML = "<button>Wróć</button>";

}