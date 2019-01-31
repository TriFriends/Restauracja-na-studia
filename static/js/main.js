
let editingTr = undefined;
let editingTrHTML;
function editMenu(me) {


    if (me.innerText == 'Zapisz' || me.innerText == 'Usuń') {
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

            document.body.appendChild(form)
            form.submit();


        }
        else {
            form.action = "http://localhost:3000/menu/delete-dish"
            form.innerHTML = `
                <input name="id" value="${me.value}">
                <button type="submit">Wyslij</button>
            `;

            document.body.appendChild(form)
            form.submit();

        }
        return;
    }
    else {

    }
    let tr = me.parentElement.parentElement;

    if (me.innerText == "Edytuj" && !editingTr) {
        editingTr = tr;
        editingTrHTML = tr.innerHTML;

    }
    else if (me.innerText == "Edytuj" && editingTr) {

        editingTr.innerHTML = editingTrHTML;
        editingTr = tr;
        editingTrHTML = tr.innerHTML;

    }


    if (me.innerText == 'Wróć') {
        tr.innerHTML = editingTrHTML
        editingTr = undefined;
        return;

    }


    tr.children[1].innerHTML = `<input name="name" type="text" value="${tr.children[1].children[0].innerHTML}">`;
    tr.children[2].innerHTML = `<input name="price" type="text" value="${tr.children[2].children[0].innerText.replace("zł", "")}">`;
    tr.children[3].children[0].innerText = "Zapisz"
    tr.children[4].children[0].innerText = "Wróć"
}

function selectTable(id) {
    let form = document.createElement('form');
    form.style.display = "none";
    form.method = "POST";
    form.action = "http://localhost:3000";
    form.innerHTML = `
        <input type="hidden" name="id" value="${id}">
        <button type="submit"></button>
    `;

    document.body.appendChild(form)
    form.submit();
}