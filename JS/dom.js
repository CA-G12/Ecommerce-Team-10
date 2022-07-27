
window.onload = () => {
    RenderProducts()
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
                            <span>${ele.title.substring(0, Math.min(20, ele.title.length))} ...</span>
                            <span>$ ${ele.price}</span>
                        </h3>
                        <div class="card-actions">
                            <button class="btn details-button" title="Details" onclick = "openPopUp(${ele.id})">
                                <i class="fa-solid fa-calendar-week"></i>
                            </button>
                            <button onclick="" class="client btn" title="Add To Cart">
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




const ArrayofCartObjects = [];

plusOneBtn.addEventListener('click', plusOne); 
minusOneBtn.addEventListener('click', minusOne); 
xButton.addEventListener('click', closePopUp); 



quantitySpan.textContent = quantityBase;
