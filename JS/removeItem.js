
function removeInCart(arr, id) {
    // let ArrayofCartObjects = JSON.parse(localStorage.getItem('ArrayofCartObjects') || '[]');
    const myArr = [...arr];
    let idx = myArr.findIndex((e) => {
        if (e.id == id)
            return true;
    });
    if (idx == -1 ) return;
    myArr.splice(idx, 1);
    // localStorage.setItem('ArrayofCartObjects', JSON.stringify(ArrayofCartObjects))
    // document.querySelector(`#card-item${id}`).style.display = 'none'

    return myArr;
}

if(typeof module !== "undefined"){
    module.exports = {
        removeInCart
    }
}