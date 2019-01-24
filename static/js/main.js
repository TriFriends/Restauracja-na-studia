

// let buttons = document.querySelectorAll('.editButton');

// for (let button of buttons) {
//     button.addEventListener('click', editMenu);
// }

let editingTr = undefined;
let editingTrHTML;
function editMenu(me) {
    // console.log('click', this);
    // console.log(this.parentElement.parentElement);

    if (me.innerText == 'Zapisz' || me.innerText == 'Usuń') {
        console.log('z u');
        let form = document.createElement('form');
        form.style.display = "none";
        form.method = "POST";
        if (me.innerText == 'Zapisz') {
            let name = me.parentElement.parentElement.children[1].children[0].value;
            let price = me.parentElement.parentElement.children[2].children[0].value;
            form.action = "http://localhost:3000/menu/edit-dish"
            form.innerHTML = `
                <input name="name" value="${name}">
                <input name="price" value="${price}">
                <input name="id" value="${me.value}">
                <button type="submit">Wyslij</button>
            `;
            console.log(form);

            document.body.appendChild(form)
            form.submit();


        }
        else {
            form.action = "http://localhost:3000/menu/delete-dish"
            form.innerHTML = `
                <input name="id" value="${me.value}">
                <button type="submit">Wyslij</button>
            `;
            console.log(form);

            document.body.appendChild(form)
            form.submit();

        }
        return;
    }
    else {

    }
    let tr = me.parentElement.parentElement;
    console.log(tr);

    if (me.innerText == "Edytuj" && !editingTr) {
        console.log('fe', tr);
        editingTr = tr;
        editingTrHTML = tr.innerHTML;
        // console.log(editingTrHTML);

    }
    else if (me.innerText == "Edytuj" && editingTr) {
        console.log('now');

        editingTr.innerHTML = editingTrHTML;
        editingTr = tr;
        editingTrHTML = tr.innerHTML;

    }


    if (me.innerText == 'Wróć') {
        console.log('w');
        // console.log(tr);
        // console.log(editingTrHTML);
        tr.innerHTML = editingTrHTML
        editingTr = undefined;
        return;

    }

    // if (this.innerText == 'Edytuj' && !editingTr) {
    //     console.log('eeee');
    //     editingTr = this.parentElement.parentElement.parentElement;
    //     editingTrHTML = this.innerHTML;

    // }
    // else if (this.innerText == 'Edytuj' && editingTr) {
    //     console.log('e');

    //     editingTr = this.parentElement.parentElement.parentElement;
    //     editingTr.innerHTML = editingTrHTML;
    // }


    // let tr = this.parentElement.parentElement.parentElement;
    // editingTr = tr;
    // editingTrHTML = tr.innerHTML;

    tr.children[1].innerHTML = `<input name="name" type="text" value="${tr.children[1].children[0].innerHTML}">`;
    tr.children[2].innerHTML = `<input name="price" type="text" value="${tr.children[2].children[0].innerText.replace("zł", "")}">`;
    tr.children[3].children[0].innerText = "Zapisz"
    tr.children[4].children[0].innerText = "Wróć"
}