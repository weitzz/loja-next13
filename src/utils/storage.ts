
import { IProductCart } from "@/context/CartContext"
export function getStorage() {
    const productsStorage = JSON.parse(localStorage.getItem('@MStore:products') || '[]')
    const quantityInCartStorage = Number(localStorage.getItem('@MStore:quantityInCart'))
    const priceInCartStorage = Number(localStorage.getItem('@MStore:priceInCart'))

    return { productsStorage, quantityInCartStorage, priceInCartStorage }
}


export function populateStorage(products: Array<IProductCart>, quantityInCart: number, priceInCart: number) {
  localStorage.setItem('@MStore:products', JSON.stringify(products))
  localStorage.setItem('@MStore:quantityInCart', String(quantityInCart))
  localStorage.setItem('@MStore:priceInCart', String(priceInCart))
}