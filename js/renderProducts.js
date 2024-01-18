const productsContainer = document.querySelector('#products-container');

getProducts();
async function getProducts(){
    const response = await fetch('./js/products.json');

    const productsArray = await response.json();
    console.log(productsArray)
    renderProducts(productsArray);
}


function renderProducts(productsArray) {
    productsArray.forEach((item)=>{
        const productHTML = `
\t\t\t\t\t<div class="col-md-6">
\t\t\t\t\t\t<div class="card mb-4" data-id="${item.id}">
\t\t\t\t\t\t\t<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
\t\t\t\t\t\t\t<div class="card-body text-center">
\t\t\t\t\t\t\t\t<h4 class="item-title">${item.title}</h4>
\t\t\t\t\t\t\t\t<p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>

\t\t\t\t\t\t\t\t<div class="details-wrapper">
\t\t\t\t\t\t\t\t\t<div class="items counter-wrapper">
\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter>1</div>
\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<div class="price">
\t\t\t\t\t\t\t\t\t\t<div class="price__weight">${item.weight}г.</div>
\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${item.price} ₽</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
`
        productsContainer.insertAdjacentHTML('beforeend', productHTML)
    })
}