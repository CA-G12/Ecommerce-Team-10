
const header = document.querySelector('header .header-nav');
let plusOneBtn = document.querySelector('.PlusOne');
let minusOneBtn = document.querySelector('.MinusOne');
let quantitySpan = document.getElementById('quantitySpan');
let smallImages = document.querySelectorAll('.product-small-image');
let mainImage = document.querySelector('.product-image');
let mainDiv = document.querySelector('.product-popup');
let xButton = document.querySelector('.x');
let priceSpan = document.querySelector('.price');
let quantityBase = 1;
let descriptionSpan = document.querySelector('.description');
let titleSpan = document.querySelector('.product-title');
let countSpan = document.querySelector('.countSpan')
const ArrayofCartObjects = JSON.parse(localStorage.getItem('ArrayofCartObjects') || '[]');

// Window Events 
window.onscroll = () => {
    if (window.scrollY > 70) header.classList.add('active')
    else header.classList.remove('active')
}

window.onload = () => {
    if (window.scrollY > 70) header.classList.add('active')
    else header.classList.remove('active')
    RenderProducts();
    let usrType = localStorage.getItem('usertype')
    if (usrType == null) {
        localStorage.setItem('usertype', 'client')
        usrType = 'client'
    }
    // userTypeSwitcher.value = usrType
    if (usrType == 'client') {
        document.querySelectorAll(`.client`).forEach(e => e.style.display = 'inline-block')
        document.querySelectorAll(`.seller`).forEach(e => e.style.display = 'none')
    }
    else if (usrType == 'seller') {
        document.querySelectorAll(`.seller`).forEach(e => e.style.display = 'inline-block')
        document.querySelectorAll(`.client`).forEach(e => e.style.display = 'none')
    }
}

// Page Settings
const ChangeType = (type) => {
    localStorage.setItem('usertype', type);
    window.location.reload()
}

// Products Rendering 
function RenderProducts(products) {
    let data = products || getAllProducts();
    let allStr = ''
    data.forEach(ele => {
        allStr += `
        <div class="card" id="prod${ele.id}">
                    <div class="card-header">
                        <img src="${ele.image}"
                            alt="" class="imageCard">
                    </div>
                    <div class="card-body">
                        <h3 class="card-details">
                            <span>${ele.title.substring(0, Math.min(15, ele.title.length))} ...</span>
                            <span>$ ${ele.price}</span>
                        </h3>
                        <div class="card-actions">
                            <button class="btn details-button" title="Details" onclick = "openPopUp(${ele.id})">
                                <i class="fa-solid fa-calendar-week"></i>
                            </button>
                            <button class="client btn" title="Add To Cart" onclick = "addToCart(${ele.id})">
                                <i class="fa-solid fa-cart-plus"></i>
                                </button>
                            <button class="seller btn" title="Add A Product">
                            <i class="fa-solid fa-plus"></i>
                            <button onClick=(RemoveProduct(${ele.id})) class="seller btn" title="Remove">
                                <i class="fa-solid fa-calendar-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
        `
    });
    document.querySelector('#productsList .row').innerHTML = allStr
}

function RemoveProduct(id) {
    let data = getAllProducts()
    if (!confirm('Are You Sure To Delete This Item?')) return;
    let newData = DeleteProduct(data, id);
    if (!newData) return;
    localStorage.setItem('products', JSON.stringify(newData))
    document.querySelector(`#prod${id}`).style.display = 'none'
}

// Pop Up Cart Details 
function plusOne() {
    if (quantityBase >= 0) {
        quantityBase = quantityBase + 1;
        quantitySpan.textContent = quantityBase;

    }
}

function minusOne() {
    if (quantityBase > 1) {
        quantityBase = quantityBase - 1;
        quantitySpan.textContent = quantityBase;
    }
}

function closePopUp() {
    mainDiv.style.display = 'none';
}

function openPopUp(id) {
    mainDiv.style.display = 'block';

    let currentItem = getAllProducts().filter((e) => {
        return e.id === id
    })[0];

    detailsid.value = id;

    mainImage.src = currentItem.image;
    priceSpan.textContent = "$" + currentItem.price
    descriptionSpan.textContent = currentItem.description
    titleSpan.textContent = currentItem.title
    smallImages.forEach((i) => {
        i.src = currentItem.image
    });
}

plusOneBtn.addEventListener('click', plusOne);
minusOneBtn.addEventListener('click', minusOne);
xButton.addEventListener('click', closePopUp);
quantitySpan.textContent = quantityBase;



function CartPage() {
    window.location.href = './cart.html'
}


function addProduct() {
    let frameElement = document.querySelector('form').elements;
    let obj = {
        id: Date.now(),
        title: frameElement.title.value,
        description: frameElement.description.value,
        price: frameElement.price.value,
        category: frameElement.cars.value,
        image: frameElement.image.value,
    }
    let newarr = AddToArray(getAllProducts(), obj)
    localStorage.setItem('products', JSON.stringify(newarr))
    RenderProducts(newarr)
}
document.querySelector('form').onsubmit = (e) => {
    addProduct()
    e.target.reset()
    e.preventDefault()
}


const filterCategory = () => {
const search = document.querySelector('#search');
const category = document.querySelector('#filter-category');
    const filteredData = getAllProducts(search.value, category.value);
    RenderProducts(filteredData)
}
