
import { IProduct } from '@/@types/products'
import { cartActionTypes } from './types'

export function addToCartAction(product: IProduct) {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: {
      product
    }
  }
}

export function removeQuantityAction(product: IProduct) {
  return {
    type: cartActionTypes.REMOVE_QUANTITY,
    payload: {
      product
    }
  }
}

export function removeFromCartAction(product: IProduct) {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: {
      product
    }
  }
}

export function removeAllItemsFromCartAction() {
  return {
    type: cartActionTypes.REMOVE_ALL_ITEMS_FROM_CART,
  }
}

