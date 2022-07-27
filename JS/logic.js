const header = document.querySelector('header .header-nav');

window.onscroll = () => {
    if (window.scrollY > 70) header.classList.add('active')
    else header.classList.remove('active')
}

window.onload = () => {
    if (window.scrollY > 70) header.classList.add('active')
    else header.classList.remove('active')
}

const getAllProducts = () => {
    // Get All Products From LocalStarage
    //return products;
}

const filterProducts = () => {

    //return products;
}

const addPrdouct = (product) => {
        // Add Product To localStarage
        // renderAdd();
}

const updateProduct = () => {

}

const addToCart = () => {

}

