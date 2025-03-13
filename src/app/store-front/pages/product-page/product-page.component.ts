import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Product } from '@products/interfaces/products.interface';
import { ProductsService } from '@products/services/products.service';
import { ProductImagePipe } from "../../../products/pipes/product-image-pipe";
import { ActivatedRoute } from '@angular/router';
import { ProductCarouselComponent } from "../../../products/components/product-carousel/product-carousel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);
  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    request:() => ({ idSlug: this.productIdSlug }),
    loader: ({ request }) =>
      this.productService.getProductByIdSlug(request.idSlug)
  });
}
