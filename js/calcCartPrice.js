function calcCartPrice() {
    // const cartWrapper = document.querySelector('.cart-wrapper')
    const cartItems = document.querySelectorAll('.cart-item')
    console.log(cartItems)
    cartItems.forEach((item)=>{
        const amountEl = item.querySelector('[data-counter]')
        const priceEl = item.querySelector('.price__currency')
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)

        console.log(currentPrice)
    })
}