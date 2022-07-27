const header = document.querySelector('header .header-nav');

window.onscroll = () => {
    if (window.scrollY > 70) header.classList.add('active')
    else header.classList.remove('active')
}

window.onload = () => {
    if (window.scrollY > 70) header.classList.add('active')
    else header.classList.remove('active')
}

const getAllProducts = (search = '', category = '') => {
    let data = localStorage.getItem('products');
    data = JSON.parse(data);

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

const addToCart = () => {

}










const rendertempdata = () => {
    let data = getAllProducts();
    if (data == null || data.length == 0) {
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
}

rendertempdata();