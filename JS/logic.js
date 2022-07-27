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


const getAllProducts = (search = '', category = '') => {
    let data = localStorage.getItem('products');
    data = JSON.parse(data);

    if (!data || !data.length) return rendertempdata()

    data = data.filter((e) =>
        e.title.toLowerCase().includes(search.trim().toLowerCase()) &&
        e.category.toLowerCase().includes(category.trim().toLowerCase()));

    return data;
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

// const addToCart = () => {

// }



// Details Function

function plusOne() {
    if (quantityBase >= 0) {
        quantityBase = quantityBase + 1;
        quantitySpan.textContent = quantityBase;
    
    }}

function minusOne() {
    if (quantityBase > 1 ) {
        quantityBase = quantityBase - 1;
        quantitySpan.textContent = quantityBase;    
    }
}

function addToCart() {
    let currentItem = getAllProducts().filter(e => e.id == detailsid.value)[0];

    currentItem.quantity = quantityBase;
    ArrayofCartObjects.push(currentItem);
    localStorage.setItem('ArrayofCartObjects', JSON.stringify(ArrayofCartObjects));

}

// A code to simulate having different images.


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
    priceSpan.textContent = currentItem.price
    descriptionSpan.textContent = currentItem.description
    titleSpan.textContent = currentItem.title
    smallImages.forEach((i) => {
        i.src = currentItem.image
    });
}

const rendertempdata = () => {
    let dta = [{
        "id": 1,
        "title": "Spoon - Soup, Plastic",
        "price": 439.3,
        "image": "http://dummyimage.com/651x752.png/ff4444/ffffff",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
        "category": "TVs"
    }, {
        "id": 2,
        "title": "Ham - Smoked, Bone - In",
        "price": 574.98,
        "image": "http://dummyimage.com/714x600.png/ff4444/ffffff",
        "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
        "category": "TVs"
    }, {
        "id": 3,
        "title": "Nut - Pumpkin Seeds",
        "price": 713.15,
        "image": "http://dummyimage.com/585x821.png/5fa2dd/ffffff",
        "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "category": "TVs"
    }, {
        "id": 4,
        "title": "Lettuce - Red Leaf",
        "price": 249.57,
        "image": "http://dummyimage.com/865x730.png/cc0000/ffffff",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "category": "Smart Phone"
    }, {
        "id": 5,
        "title": "Cookies - Oreo, 4 Pack",
        "price": 813.71,
        "image": "http://dummyimage.com/897x972.png/ff4444/ffffff",
        "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "category": "Smart Phone"
    }, {
        "id": 6,
        "title": "Wine - Chardonnay South",
        "price": 698.63,
        "image": "http://dummyimage.com/592x581.png/ff4444/ffffff",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "category": "Smart Phone"
    }, {
        "id": 7,
        "title": "Long Island Ice Tea",
        "price": 578.53,
        "image": "http://dummyimage.com/669x777.png/cc0000/ffffff",
        "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        "category": "Laptops"
    }, {
        "id": 8,
        "title": "Pate - Liver",
        "price": 489.9,
        "image": "http://dummyimage.com/998x742.png/ff4444/ffffff",
        "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "category": "Laptops"
    }, {
        "id": 9,
        "title": "Wine - Lamancha Do Crianza",
        "price": 289.49,
        "image": "http://dummyimage.com/577x914.png/5fa2dd/ffffff",
        "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "category": "Laptops"
    }, {
        "id": 10,
        "title": "Scallops 60/80 Iqf",
        "price": 297.32,
        "image": "http://dummyimage.com/894x637.png/cc0000/ffffff",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "category": "Laptops"
    }]
    localStorage.setItem('products', JSON.stringify(dta));

}

rendertempdata();

function getCArtItems() {
    const ArrayofCartObjects = JSON.parse(localStorage.getItem('ArrayofCartObjects') || '[]');
    console.log(ArrayofCartObjects)
    const table = document.querySelector('#cart tbody')
    table.innerHTML = '';
    let txt = '';
    ArrayofCartObjects.forEach(item => {
        txt += `
        <tr id='card-item${item.id}'>
        <td><a><i class="ri-delete-bin-2-fill" onClick='removeInCart(${item.id})' ></i></a></td>
        <td><img src="https://images.unsplash.com/photo-1506777775294-c79f090bac1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdCUyMGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product"></td>
        <td>${item.title}</td>
        <td>$ ${item.price}</td>
        <td><input type="number" value="1"></td>
        <td>$ ${item.price * 2}</td>
    </tr>
        `
    })
    table.innerHTML = txt;
}

// display in cart page
function displayInCart () {

    /*
    
    locatstorage => array 




    */


    let cartSection = document.querySelector('#cart')
    if (cartSection) {
        cartSection.innerHTML = ''

        ArrayofCartObjects.map(item => {
            cartSection.innerHTML = `
                <table width="100%">
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><a href="#"><i class="ri-delete-bin-2-fill"></i></a></td>
                        <td><img src="https://images.unsplash.com/photo-1506777775294-c79f090bac1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdCUyMGlwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product"></td>
                        <td>${item.name}</td>
                        <td>$118.19</td>
                        <td><input type="number" value="1"></td>
                        <td>$118.19</td>
                    </tr>
                </tbody>
            </table>

            <div class="total-cart">
                <h3>Cart Total</h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>$ 335</td>
                    </tr>

                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$350</strong></td>
                    </tr>
                </table>
                <div class="buttons">
                    <button class="btn">Checkout</button>
                    <button class="btn">Clear All</button>
                </div>
            </div>
            `
        })
    }
}

// function removeInCart(arr, id) {
//     let listOfArray = [{id: 1}, {id:2}]
//     //let ArrayofCartObjects = JSON.parse(localStorage.getItem('ArrayofCartObjects') || '[]');
//     let idx = arr.findIndex((e) => {
//         if (e.id == id)
//             return true;
//     });
//     if (idx == -1 || !confirm('Are You Sure To Delete This Item?')) return;
//     arr.splice(idx, 1);
    
// }

function removeInCart(arr, id) {
    // let ArrayofCartObjects = JSON.parse(localStorage.getItem('ArrayofCartObjects') || '[]');
    const myArr = [...arr];
    let idx = myArr.findIndex((e) => {
        if (e.id == id)
            return true;
    });
    if (idx == -1 || !confirm('Are You Sure To Delete This Item?')) return;
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
function CartPage() {
    window.location.href = './cart.html'
}

getCArtItems();
//displayInCart()
