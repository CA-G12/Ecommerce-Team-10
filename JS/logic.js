// Products Functions
const getAllProducts = (search = '', category = '') => {
    let data = localStorage.getItem('products');
    data = JSON.parse(data);

    if (!data || !data.length) return rendertempdata()

    data = data.filter((e) =>
        e.title.toLowerCase().includes(search.trim().toLowerCase()) &&
        e.category.toLowerCase().includes(category.trim().toLowerCase()));

    return data;
}

function addToCart() {
    let currentItem = getAllProducts().filter(e => e.id == detailsid.value)[0];

    currentItem.quantity = quantityBase;
    ArrayofCartObjects.push(currentItem);
    localStorage.setItem('ArrayofCartObjects', JSON.stringify(ArrayofCartObjects));

}


const rendertempdata = () => {
    let dta = [{
        "id": 1,
        "title": "Samsung - 88 Class - LED TV",
        "price": 499,
        "image": "https://azcd.joycemayne.com.au/media/catalog/product/cache/23/image/992x558/9df78eab33525d08d6e5fb8d27136e95/q/a/qa85qn85aawxxy-samsung-qn85a-neo-4k-qled-smart-tv-00.jpg",
        "description": "Enrich your home theater experience with this 88-inch Samsung QLED smart TV. Its Quantum Dots and Infinite Array technologies optimize color details to bring out the richness and depth of 4K movies. This Samsung QLED smart TV comes with a One Connect box and fiber optical cable for clutter-free linking of home cinema and gaming components.",
        "category": "TVs"
    }, {
        "id": 2,
        "title": " Samsuing 75* Class 6 Series LED TV",
        "price": 520,
        "image": "https://i.gadgets360cdn.com/products/televisions/large/1548155076_832_samsung_65-inch-led-ultra-hd-4k-tv-65nu7100.jpg",
        "description": "Enrich your home theater experience with this 88-inch Samsung QLED smart TV. Its Quantum Dots and Infinite Array technologies optimize color details to bring out the richness and depth of 4K movies. This Samsung QLED smart TV comes with a One Connect box and fiber optical cable for clutter-free linking of home cinema and gaming components.",
        "category": "TVs"
    }, {
        "id": 3,
        "title": "Sony 2022 Class 2 Series LED TV",
        "price": 540,
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454109_sd.jpg",
        "description": "Enrich your home theater experience with this 88-inch Samsung QLED smart TV. Its Quantum Dots and Infinite Array technologies optimize color details to bring out the richness and depth of 4K movies. This Samsung QLED smart TV comes with a One Connect box and fiber optical cable for clutter-free linking of home cinema and gaming components.",
        "category": "TVs"
    }, {
        "id": 4,
        "title": "Iphone 13",
        "price": 750,
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-white-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&.v=1567021770073",
        "description": "Who doesn't know Iphone? They are one of the most popular phones on the planet because they provide comfort and ease to the user. ",
        "category": "Smart Phone"
    }, {
        "id": 5,
        "title": "Iphone 12",
        "price": 700,
        "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000",
        "description": "Who doesn't know Iphone? They are one of the most popular phones on the planet because they provide comfort and ease to the user. ",
        "category": "Smart Phone"
    }, {
        "id": 6,
        "title": "Iphone 11",
        "price": 650,
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=940&hei=1112&fmt=png-alpha&.v=1566956144763",
        "description": "Who doesn't know Iphone? They are one of the most popular phones on the planet because they provide comfort and ease to the user. ",
        "category": "Smart Phone"
    }, {
        "id": 7,
        "title": "Iphone 11",
        "price": 580,
        "image": "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-11-pro-max-midnight-green.png",
        "description": "Who doesn't know Iphone? They are one of the most popular phones on the planet because they provide comfort and ease to the user. ",
        "category": "Smart Phone"
    }, {
        "id": 8,
        "title": "Samsung Laptop",
        "price": 500,
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5886/5886107_sd.jpg",
        "description": "Laptops are one of the most useful tools on the planet.",
        "category": "Laptops"
    }, {
        "id": 9,
        "title": "Dell Inspiron Laptop",
        "price": 450,
        "image": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432549_sd.jpg;maxHeight=640;maxWidth=550",
        "description": "Laptops are one of the most useful tools on the planet.",
        "category": "Laptops"
    }, {
        "id": 10,
        "title": "Gaming Laptop",
        "price": 650,
        "image": "https://sc04.alicdn.com/kf/Hbd109d18f4a241b8b864eef416be3714G.jpg",
        "description": "Laptops are one of the most useful tools on the planet.",
        "category": "Laptops"
    }]
    localStorage.setItem('products', JSON.stringify(dta));

}

rendertempdata();
