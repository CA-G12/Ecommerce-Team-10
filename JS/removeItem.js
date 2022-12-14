
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

const DeleteProduct = (data, id) => {
    let idx = data.findIndex((e) => {
        if (e.id == id)
            return true;
    });
    if (idx == -1) return 0;
    data.splice(idx, 1);
    return data;
}
function AddToArray(array , obj){
    if(!array) array = []
    array.push(obj)
    return array
}
if (typeof module !== "undefined") {
    module.exports = {
        removeInCart,
        DeleteProduct,
        AddToArray,
    }
}