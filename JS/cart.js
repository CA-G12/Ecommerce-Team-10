function removeInCart(arr, id) {
    const myArr = [...arr];
    let idx = myArr.findIndex((e) => {
        if (e.id == id)
            return true;
    });
    if (idx == -1) return;
    myArr.splice(idx, 1);
    return myArr;
}

function getCrtItems() {
    const arrayOfCartObjects = JSON.parse(localStorage.getItem('ArrayOfCartObjects') || '[]');
    const table = document.querySelector('#cart tbody')
    table.innerHTML = '';
    let txt = '';
    arrayOfCartObjects.forEach(item => {
        txt += `
        <tr id='card-item${item.id}'>
        <td><a><i class="ri-delete-bin-2-fill" onClick='RemoveFromCart(${item.id})' ></i></a></td>
        <td><img src=${item.image} alt="product"></td>
        <td>${item.title}</td>
        <td>$ ${item.price}</td>
        <td>${item.quantity}</td>
        <td>$ ${item.price * item.quantity}</td>
    </tr>
        `
    })
    table.innerHTML = txt;
}

getCrtItems();

function RemoveFromCart(id) {
    let data = JSON.parse(localStorage.getItem('ArrayOfCartObjects') || '[]')
    if (!confirm('Are You Sure To Delete This Item?')) return;
    let newData = removeInCart(data, id);
    if (!newData) return;
    localStorage.setItem('ArrayOfCartObjects', JSON.stringify(newData))
    document.querySelector(`#card-item${id}`).style.display = 'none'
}

if (typeof module !== "undefined") {
    module.exports = {
        removeInCart
    }
}