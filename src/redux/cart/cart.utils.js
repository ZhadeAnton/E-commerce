export const addItemToCart = (itemsCollection, newItem) => {
  const excistingItem = itemsCollection.find(item =>
    item.id === newItem.id
  )

  if (excistingItem) {
    return itemsCollection.map(cartItem =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...itemsCollection, { ...newItem, quantity: 1 }]
}