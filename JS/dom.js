window.onload = () => {
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
    // SetFilterOptions()
}


const RenderProducts = (products) => {
    let data = products || getAllProducts();
    let allStr = ''
    data.forEach(ele => {
        allStr += `
        <div class="card" id="prod${ele.id}">
                    <div class="card-header">
                        <img src="${ele.image}"
                            alt="">
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
                            <button class="seller btn" title="Edit">
                                <i class="fa-solid fa-message-pen"></i>
                            </button>
                            <button onClick=(RemoveProduct(${ele.id})) class="seller btn" title="Remove">
                                <i class="fa-solid fa-calendar-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
        `
    });
    console.log(data)
    document.querySelector('#productsList .row').innerHTML = allStr
}



// //Then repeat this process for : Images, price, title, and description




plusOneBtn.addEventListener('click', plusOne); 
minusOneBtn.addEventListener('click', minusOne); 
xButton.addEventListener('click', closePopUp); 



quantitySpan.textContent = quantityBase;
const RemoveProduct = (id) => {
    let data = getAllProducts()
    let idx = data.findIndex((e) => {
        if (e.id == id)
            return true;
    });

    if (idx == -1 || !confirm('Are You Sure To Delete This Item?')) return;
    data.splice(idx, 1);
    localStorage.setItem('products', JSON.stringify(data))
    document.querySelector(`#prod${id}`).style.display = 'none'
}

const ChangeType = (type) => {
    localStorage.setItem('usertype', type);
    window.location.reload()
}

