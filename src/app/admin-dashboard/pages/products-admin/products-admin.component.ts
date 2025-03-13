import { Component, inject, signal } from '@angular/core';
import { ProductTableComponent } from "../../../products/components/product-table/product-table.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsService } from '@products/services/products.service';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-admin',
  imports: [ProductTableComponent, PaginationComponent, RouterLink],
  templateUrl: './products-admin.component.html',
})
export class ProductsAdminComponent {
    productService = inject(ProductsService);
    paginationService = inject(PaginationService);

    productsPerPage = signal(10);

    productsResource = rxResource({
      request: () => ({ page: this.paginationService.currentPage() - 1, limit: this.productsPerPage() }),
      loader:({ request }) => {
          return this.productService.getProducts({
            offset: request.page * 9,
            limit: request.limit
          });
        },
    });
 }
