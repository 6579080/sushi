window.addEventListener('click', (event) => {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        const counterWrapper = event.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')

    }
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText

        console.log(counter)
    }
    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText



            // is goods in basket
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            console.log('in basket')
            event.target.closest('.cart-item').remove()

            calcCartPriceAndDelivery()

            toggleCartStatus()
        }
    }

    if (event.target.hasAttributes('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelivery()
    }

})