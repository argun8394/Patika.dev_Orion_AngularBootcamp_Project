import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { wishlistUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  //For each element whose like icon is clicked or deleted, we add and delete using the post and delete methods.
  //Mapping the props. (pipe() and map())
  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }

  addToWishlist(productId) {
    return this.http.post(wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
