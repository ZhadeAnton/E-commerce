export const addItemToCart = (cartItems, newItem) => {
  const excistingItem = cartItems.find(item =>
    item.id === newItem.id
  )

  if (excistingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...newItem, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(item => item.id === cartItemToRemove.id)

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}