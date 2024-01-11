window.addEventListener('click', ()=>{
    if (event.target.hasAttribute('data-cart')){
        console.log('click on cart button')
        const card = event.target.closest('.card');
        const productInfo =  {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title'.innerText),
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        }
        console.log(productInfo)

    }
})