// Render Cart
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

function getCArtItems() {
    const ArrayofCartObjects = JSON.parse(localStorage.getItem('ArrayofCartObjects') || '[]');
    console.log(ArrayofCartObjects)
    const table = document.querySelector('#cart tbody')
    table.innerHTML = '';
    let txt = '';
    ArrayofCartObjects.forEach(item => {
        txt += `
        <tr id='card-item${item.id}'>
        <td><a><i class="ri-delete-bin-2-fill" onClick='RemoveFromCart(${item.id})' ></i></a></td>
        <td><img src="${item.image}" alt="product"></td>
        <td>${item.title}</td>
        <td>$ ${item.price}</td>
        <td><input type="number" value="${item.quantity}"></td>
        <td>$ ${item.price * item.quantity}</td>
    </tr>
        `
    })
    table.innerHTML = txt;
}

getCArtItems();

function RemoveFromCart(id) {
    let data = JSON.parse(localStorage.getItem('ArrayofCartObjects') || '[]')
    if (!confirm('Are You Sure To Delete This Item?')) return;
    let newData = removeInCart(data, id);
    if (!newData) return;
    localStorage.setItem('ArrayofCartObjects', JSON.stringify(newData))
    document.querySelector(`#card-item${id}`).style.display = 'none'
}

if (typeof module !== "undefined") {
    module.exports = {
        removeInCart
    }
}