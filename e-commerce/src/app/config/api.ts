import { environment } from 'src/environments/environment'

//The urls we defined in the database
export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
export const wishlistUrl = baseUrl + '/wishlist'
