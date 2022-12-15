// const removeProduct = (products, productId) => products.filter(product => product.id !== productId)
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

const deleteProduct = (data, id) => {
/*
    here you are updating the original array(that is passed as an input to the function) by pushing a new element to it which is not pure.

    const addNewProduct = (products, product) => [...products, product]
*/

    let idx = data.findIndex((e) => {
        if (e.id == id)
            return true;
    });
    if (idx == -1) return 0;
    data.splice(idx, 1);
    return data;
}
function addToArray(array , obj){
    if(!array) array = []
    array.push(obj)
    return array
}
if (typeof module !== "undefined") {
    module.exports = {
        removeInCart,
        deleteProduct,
        addToArray,
    }
}