function getShippingMessage(country, price, deliveryFee) {
    let finalPrice = price + deliveryFee
    return "Shipping to " + country + " will cost " + finalPrice + " credits"
}